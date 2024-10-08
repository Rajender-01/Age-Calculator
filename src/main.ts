let Button = document.querySelector("button");
let Result = document.querySelector("#result");
let BirthDateInput = document.querySelector("#birthdate");
let today = new Date();
// => Disable Calender Dates After the Current Dates
BirthDateInput?.setAttribute("max", today.toISOString().split("T")[0]);

const calculateAge = () => {
  let inputElement = BirthDateInput as HTMLInputElement;

  if (!inputElement.value && Result) {
    Result.innerHTML = "Please enter your birth date.";
    return;
  }

  let BirthDate = new Date(inputElement.value);

  // Calculate the difference
  let years = today.getFullYear() - BirthDate.getFullYear();
  let months = today.getMonth() - BirthDate.getMonth();
  let days = today.getDate() - BirthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (Result) {
    Result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
};

Button?.addEventListener("click", calculateAge);
