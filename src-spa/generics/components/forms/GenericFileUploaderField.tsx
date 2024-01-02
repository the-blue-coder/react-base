/* eslint-disable react-hooks/exhaustive-deps */
import { Box, FormLabel, Grid, Paper, Typography } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import useGenericFileUploaderFieldStyles from "generics/styles/components/forms/useGenericFileUploaderFieldStyles";
import { GenericFileUploaderFileType } from "generics/types/Forms.type";

const GenericFileUploaderField: React.FC<WidgetProps> = ({ uiSchema, onChange }) => {
    const [files, setFiles] = useState<GenericFileUploaderFileType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const styles = useGenericFileUploaderFieldStyles();

    const uiOptions = uiSchema?.["ui:options"];

    const accept = uiOptions?.["accept"] as Accept;
    const label = uiOptions?.["label"];
    const placeholder = uiOptions?.["placeholder"];
    const maxFiles = uiOptions?.["maxFiles"];
    const isImageUpload = _.some(accept, (_value, key) => _.includes(key, "image"));

    const { getRootProps, getInputProps } = useDropzone({
        accept: accept,

        maxFiles: maxFiles ? Number(maxFiles) : 1,

        onDrop: (acceptedFiles) => {
            setError(null);

            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );

            onChange(acceptedFiles);
        },

        onDropRejected: (fileRejections) => {
            if (fileRejections.length > 0) {
                setError(fileRejections[0].errors[0].message);
            }
        },
    });

    useEffect(() => {
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <Box sx={styles.genericFileUploaderField} mt={-2}>
            <Box mb={0.5}>
                <FormLabel className="form-label">{label}</FormLabel>
            </Box>

            <Paper {...getRootProps()} className="paper" elevation={3}>
                <input {...getInputProps()} />

                {files && files.length > 0 ? (
                    <Grid container spacing={1}>
                        {files.map((file) => (
                            <Grid key={file.name} item xs={isImageUpload ? 3 : 12}>
                                {isImageUpload ? (
                                    <Box className="thumbnail-container">
                                        <img
                                            src={file.preview}
                                            onLoad={() => {
                                                URL.revokeObjectURL(file.preview);
                                            }}
                                            alt={file.name}
                                        />
                                    </Box>
                                ) : (
                                    <Box className="filenames-container">{file.name}</Box>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="body1" color="textSecondary">
                        {placeholder ?? "Drag and drop a file here, or click to select one"}
                    </Typography>
                )}
            </Paper>

            {error && (
                <Box className="error" mt={0.5}>
                    Error: {error?.toLowerCase()}
                </Box>
            )}
        </Box>
    );
};

export default GenericFileUploaderField;
