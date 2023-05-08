import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import { Container } from "./styled";
const DropImage: React.FC = () => {
  const [image, setImage] = useState<string>("");

  const [preview, setPreview] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  const openInput = () => {
    ref.current?.click();
  };
  const imageHandle = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    }

    useEffect(() => {
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(image as any);
      }
    }, [image]);
  };

  return (
    <Container onClick={openInput}>
      <input
        type={"file"}
        ref={ref}
        accept="image/*"
        onChange={(event) => imageHandle(event)}
        style={{ display: "none" }}
      />
      {image && <Image className="image" fill alt="as" src={preview} />}
    </Container>
  );
};

export default DropImage;
