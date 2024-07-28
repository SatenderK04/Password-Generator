import style from "./Factors.module.css";

// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercase = "abcdefghijklmnopqrstuvwxyz";
// // const specialChar = "@#$%&*_";
// // const numbers = "0123456789";
// // const multiSelect = [];

const val = [4, 6, 8, 10, 12, 14, 16];
export default function Factors({
  passLen,
  lowercaseChecked,
  numberChecked,
  specialCharChecked,
}) {
  return (
    <>
      <div className={style.factors}>
        <div className={`${style.len}`}>
          <label htmlFor="length" style={{ margin: "0.25rem .5rem" }}>
            Password Length
          </label>
          <select name="length" id="length" defaultValue="6" onChange={passLen}>
            Password Length
            {val.map((i) => {
              return (
                <option value={i} key={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`${style.Lower} ${style.align}`}>
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            onChange={lowercaseChecked}
          />
          <label htmlFor="lowercase">LowerCase</label>
        </div>
        <div className={`${style.numbers} ${style.align}`}>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            onChange={numberChecked}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className={`${style.specialChar} ${style.align}`}>
          <input
            type="checkbox"
            name="specialChar"
            id="specialChar"
            onChange={specialCharChecked}
          />
          <label htmlFor="specialChar">Special Characters</label>
        </div>
      </div>
    </>
  );
}
