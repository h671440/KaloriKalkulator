import React, {useState} from "react";
import "./Calculator.css";

function Calculator(){
    const [weight, setWeight] = useState("");
    const [calories, setCalories] = useState(null);
    const [height, setHeight] = useState("");
    const [sex, setSex] = useState("male");
    const [activity, setActivity] = useState("1.2");
    
    const GOAL_WEIGHT = 80;

const calculateCalories = () => {
    if(!weight || weight <= 0 || !height || height <= 0) return;


    let BMR;
    if(sex === "male"){
        BMR = 10 * weight + 6.25 * height + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 161;
    }
    const tdee = BMR * parseFloat(activity);

    const gainOne   = tdee + 1100; 
    const gainHalf  = tdee + 550;  
    const gainQuart = tdee + 275;  
    const loseOne   = tdee - 1100; 
    const loseHalf  = tdee - 550;  
    const loseQuart = tdee - 275;  

    setCalories({
      tdee: Math.round(tdee),
      gainOne: Math.round(gainOne),
      gainHalf: Math.round(gainHalf),
      gainQuart: Math.round(gainQuart),
      loseOne: Math.round(loseOne),
      loseHalf: Math.round(loseHalf),
      loseQuart: Math.round(loseQuart),
    });
  };

  const buildGoalChart = () => {
    if (!calories || !weight || parseFloat(weight) <= 0) return null;

    const currentWeight= parseFloat(weight);
    if(currentWeight === GOAL_WEIGHT){
        return null;
    }
    const kgdifference = GOAL_WEIGHT - currentWeight;
    const isGaining = kgdifference > 0;
    const absDiff = Math.abs(kgdifference);

    // Weekly rates we’ll display
    const rates = [0.25, 0.5, 1.0];

    // Each rate => how many weeks, what daily offset, what daily calories
    // 1 kg = approx 7700 kcal => daily offset for 1 kg/week is ~1100 kcal
    // 0.5 => 550, 0.25 => 275
    const data = rates.map((rate) => {
    const weeks = absDiff / rate; // e.g. if difference is 4 kg and rate is 0.5 => 8 weeks
  
    // The daily offset
    let offset;
    if (rate === 1) offset = 1100;
    else if (rate === 0.5) offset = 550;
    else offset = 275; // for 0.25

    // If we’re gaining, daily cals = TDEE + offset
    // If losing, daily cals = TDEE - offset
    const dailyCals = isGaining
      ? calories.tdee + offset
      : calories.tdee - offset;

    return {
      rate,
      weeks: weeks.toFixed(1),      // round to 1 decimal
      dailyCals: Math.round(dailyCals),
    };
  });

  

  return (
    <div className="goal-section">
      <h3>Plan to reach {GOAL_WEIGHT} kg</h3>
      <table className="goal-table">
        <thead>
          <tr>
            <th>Weekly Rate (kg/week)</th>
            <th>Approx Weeks to Reach 80kg</th>
            <th>Daily Calories</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.rate}>
              <td>{row.rate}</td>
              <td>{row.weeks}</td>
              <td>{row.dailyCals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

return (
    <div className = "calculator-container">
        <h2> Calculate your daily calorie level</h2>
        <label>
            Weight (kg):
        <input
        type = "number"
        value = {weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        placeholder="Weight in kg"
        className="calculator-input"
        />
        </label>

        <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Height in cm"
          className="calculator-input"
        />
      </label>

      <label>
        Sex:
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="calculator-select"
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
          className="calculator-select"
        >
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">Lightly active (1–3 days/week)</option>
          <option value="1.55">Moderately active (3–5 days/week)</option>
          <option value="1.725">Very active (6–7 days/week)</option>
          <option value="1.9">Extra active (hard exercise/physical job)</option>
        </select>
      </label>


        <button onClick={calculateCalories} className="calculator-button">
            Calculate
            </button>

        {calories && (
            <div className="results">
                <h3>Results</h3>
                <p><strong> gain 1kg/week:</strong> {calories.gainOne} kcal</p>
                <p><strong>gain 0.5kg/week:</strong> {calories.gainHalf} kcal</p>
                <p><strong> gain 0.25kg/week:</strong> {calories.gainQuart} kcal</p>
                <p><strong>maintenence calories:</strong> {calories.tdee} kcal</p>
                <p><strong> lose 0.25kg/week:</strong> {calories.loseQuart} kcal</p>
                <p><strong>lose 0.5kg/week:</strong> {calories.loseHalf} kcal</p>
                <p><strong> lose 1kg/week:</strong> {calories.loseOne} kcal</p>
                {buildGoalChart()}
            </div>
        )}
       
    </div>
);
}



export default Calculator;