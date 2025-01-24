Calorie Calculator

This project provides a React-based calorie calculator that goes beyond the typical “plug-in-your-weight” approach. It allows you to visualize weekly weight changes, set custom goals, and see how fixed daily intake affects your progress.

Why Another Calorie Calculator?

I built this calculator because I wanted more visualizations and detailed control than most other calculators offer.
I’m passionate about calorie intake, so I wanted a tool I could personally adjust to fit my needs—and hopefully, others who are also obsessed with tracking their calories.

Key Features
Mifflin-St Jeor Formula: Calculates Basal Metabolic Rate (BMR), then multiplies by an activity factor to estimate Total Daily Energy Expenditure (TDEE).
Goal Weight & Fixed Intake: Enter your target weight, specify a daily calorie intake, and see a week-by-week weight projection.
Interactive Chart: Uses Recharts to display your projected weight loss/gain over time.
Weekly Rate Table: Shows how many calories to eat if you want to lose or gain 0.25 kg, 0.5 kg, or 1 kg per week.

Installation

Clone this repository:
git clone https://github.com/h671440/KaloriKalkulator.git

cd CalorieCalculator

Install Dependencies:
npm install

Start the Development Server:
npm run dev

Open your browser to http://localhost:5173/ (or whatever port Vite displays) to see the calculator in action.
Usage

Enter your stats (current weight, height, sex, activity level).
Optionally, provide a “Fixed Daily Intake” if you want the tool to project your weight changes on a line chart.
Click “Calculate” (or press Enter if you’re in an input field).
View your results:
Maintenance Calories and recommended intakes to gain/lose at various weekly rates.
Weight Projection Chart to see how long it might take to reach your goal.
Contributing

Contributions are welcome! If you have suggestions or bug fixes:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request.
Disclaimer

This calculator relies on general estimates (e.g., 1 kg ~ 7700 kcal).
Everyone’s physiology is different, so results should be taken as rough guidelines, not absolute guarantees.
Always consult a medical or nutrition professional for serious health concerns.
