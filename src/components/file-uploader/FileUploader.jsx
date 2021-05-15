import React, { useContext, useState } from "react";
import { Button, message, Modal, Upload } from "antd";
import IDECTX from "../../pages/IDE/IDECTX";
import "./file-uploader.scss";
import { UploadOutlined } from "@ant-design/icons";

const FileUploader = () => {

    const {prog, setProg} = useContext(IDECTX);
    const [isLoadingFile, setIsLoadingFile] = useState(false);

    const handleFileUpload = async (file) => {
        setIsLoadingFile(true);
        const programFromFile = await file.text();
        if (prog.length > 0) {
            overrideIfApproved(programFromFile);
        } else {
            setProg(programFromFile);
            message.success({duration: 1, content: "File was loaded successfully"});
        }
        setIsLoadingFile(false);
    };

    const overrideIfApproved = (programFromFile) => {
        Modal.confirm({
            title: "Just a second",
            content: "There is a bpjs program in the editor, sure you want to override it?",
            onOk: () => {
                setProg(programFromFile);
                message.success({duration: 1, content: "File was loaded successfully"});
            },
            onCancel: () => {
            },
            closable: true,
            okText: "Override",
            cancelButtonProps: {className: "cancel-override-button"}
        });
    };

    return (
        <Upload showUploadList={false} customRequest={options => handleFileUpload(options.file)}>
            <div className={"upload-button-wrapper"}>
                <Button loading={isLoadingFile} type={"primary"} size={"middle"} icon={<UploadOutlined/>}>
                    Load File
                </Button>
            </div>
        </Upload>
    );
};

export default FileUploader;