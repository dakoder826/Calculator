const savedCalculation = localStorage.getItem("calculation");
    if (savedCalculation) {
      document.getElementById("result").value = savedCalculation;
    }

    function appendToResult(value) {
      const resultField = document.getElementById("result");
      resultField.value += value;
      localStorage.setItem("calculation", resultField.value);
    }

    function calculate() {
      const resultField = document.getElementById("result");
      try {
        resultField.value = eval(resultField.value);
        localStorage.setItem("calculation", resultField.value);
      } catch (error) {
        resultField.value = "Error";
        localStorage.setItem("calculation", resultField.value);
      }
    }

    function clearResult() {
      document.getElementById("result").value = "";
      localStorage.removeItem("calculation");
    }