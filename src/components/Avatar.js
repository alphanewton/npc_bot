import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="transition-3 fixed bottom-[10px] right-[10px] lg:right-[21px] lg:bottom-[21px]">
      {/* <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hover ? "1" : "0" },
        }}
      >
        Hey It's InsSights Bot!!!
      </div> */}
      <div
        className="transition-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hover ? "1px solid #f9f0ff" : "4px solid #2F4AAD" },
          ...{ width: hover ? "78px" : "72px" },
          ...{ height: hover ? "78px" : "72px" },
          ...{
            backgroundImage: `url(${
              props.visible ? "/close.svg" : "/mini_logo.png"
            })`,
          },
        }}
      ></div>
    </div>
  );
};

export default Avatar;
