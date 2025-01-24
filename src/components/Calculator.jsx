import React, {useState} from "react";

function Calculator(){
    const [weight, setWeight] = useState("");
    const [calories, setCalories] = useState(null);
    const [height, setHeight] = useState("");
    const [sex, setSex] = useState("male");
    const [activity, setActivity] = useState("1.2");
    


const calculateCalories = () => {
    if(!weight || weight <= 0 || !height || height <= 0) return;


    let BMR;
    if(sex === "male"){
        BMR = 10 * weight + 6.25 * height + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 161;
    }
    const tdee = BMR * parseFloat(activity);

    const gainone   = tdee + 1100; // +1 kg/week
    const gainhalf  = tdee + 550;  // +0.5 kg/week
    const gainquart = tdee + 275;  // +0.25 kg/week
    const loseone   = tdee - 1100; // -1 kg/week
    const losehalf  = tdee - 550;  // -0.5 kg/week
    const losequart = tdee - 275;  // -0.25 kg/week

    setCalories({
      tdee: Math.round(tdee),
      gainone: Math.round(gainone),
      gainhalf: Math.round(gainhalf),
      gainquart: Math.round(gainquart),
      loseone: Math.round(loseone),
      losehalf: Math.round(losehalf),
      losequart: Math.round(losequart),
    });
  };

return (
    <div style ={{padding : "20px", maxWidth: "400px", margin: "auto", backgroundColor: "#f4f4f4", borderRadius: "10px"}}>
        <h2> Calculate your daily calorie level</h2>
        <label>
            Weight (kg):
        <input
        type = "number"
        value = {weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        placeholder="Weight in kg"
        style={{padding: "10px", margin: "10px", width: "100%"}} 
        />
        </label>

        <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Height in cm"
          style={{ padding: "10px", margin: "10px 0", width: "100%" }}
        />
      </label>

      <label>
        Sex:
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          style={{ display: "block", padding: "10px", margin: "10px 0", width: "100%" }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label>
        Activity Level:
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={{ display: "block", padding: "10px", margin: "10px 0", width: "100%" }}
        >
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">Lightly active (1–3 days/week)</option>
          <option value="1.55">Moderately active (3–5 days/week)</option>
          <option value="1.725">Very active (6–7 days/week)</option>
          <option value="1.9">Extra active (hard exercise/physical job)</option>
        </select>
      </label>


        <button onClick={calculateCalories} 
         style={{padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", 
            border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Calculate
            </button>

        {calories && (
            <div style = {{marginTop: "20px"}}>
                <h3>Results</h3>
                <p><strong> gain 1kg/week:</strong> {calories.gain_1} kcal</p>
                <p><strong>gain 0.5kg/week:</strong> {calories.gain0_5} kcal</p>
                <p><strong> gain 0.25kg/week:</strong> {calories.gain0_25} kcal</p>
                <p><strong>maintenence calories:</strong> {calories.tdee} kcal</p>
                <p><strong> lose 0.25kg/week:</strong> {calories.lose0_25} kcal</p>
                <p><strong>lose 0.5kg/week:</strong> {calories.lose0_5} kcal</p>
                <p><strong> lose 1kg/week:</strong> {calories.lose_1} kcal</p>
            </div>
        )}
       
    </div>
);

}
export default Calculator;