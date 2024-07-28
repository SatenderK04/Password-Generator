import style from "./Display.module.css";
import { IoCopy } from "react-icons/io5";
export default function Display({
  generatePass,
  password,
  copyToClipboard,
  alertMessage,
}) {
  return (
    <>
      <div className={style.display}>
        <input
          className={style.input}
          type="text"
          readOnly
          placeholder="Generate your password..."
          value={password}
        />
        <button className={style.genBtn} onClick={generatePass}>
          Generate
        </button>
        <button className={style.copyBtn} onClick={copyToClipboard}>
          <IoCopy />
        </button>
        <span className={style.alert}>{alertMessage}</span>
      </div>
    </>
  );
}
