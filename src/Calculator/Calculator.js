import React, { Component } from "react";
import "./style.css";
class Calculator extends Component {
  state = {
    screenCurrent: "0",
  };

  number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  btnClicked = (val) => {
    //Lấy dữ liệu vào hiện tại
    let valueInput = this.state.screenCurrent;
    //Lấy ký tự cuối
    let lastChar = valueInput.substr(valueInput.length - 1);
    // Lấy ký tự đầu
    let firstChar = valueInput.substr(0, 1);
    // Chức năng AC
    let strRemoveLast = valueInput.substr(0, valueInput.length - 1);

    if (valueInput.length === 0) {
      if (val === "+" || val === "x" || val === "/") {
        valueInput = "0" + val;
      } else if (val === ".") {
        return;
      }
    }

    for (let i = 0; i < this.number.length; i++) {
      if (val === this.number[i]) {
        if (valueInput.length === 1 && valueInput === "0") {
          valueInput = strRemoveLast;
        }
      }
    }

    if (val === "0") {
      if (firstChar === "0" && valueInput.length === 0) {
        valueInput = strRemoveLast;
      }
    }

    const removeDuplicate = (valueOperator) => {
      if (valueOperator === ".") {
        if (
          lastChar === "-" ||
          lastChar === "+" ||
          lastChar === "*" ||
          lastChar === "/"
        ) {
          return false;
        }
        return true;
      }
      if (lastChar === "-" || lastChar === "+") {
        valueInput = strRemoveLast;
      }
      if (lastChar === "*" || lastChar === "/") {
        if (valueOperator === "-") return;
        valueInput = strRemoveLast;
      }
    };

    if (
      val === "-" ||
      val === "+" ||
      val === "*" ||
      val === "/" ||
      val === "."
    ) {
      removeDuplicate(val);
    }
    if (val === ".") {
      if (lastChar === ".") {
        valueInput = strRemoveLast;
      }
      if (!removeDuplicate(val)) {
        return;
      }
    }

    valueInput += val;
    // this.calcInput.value = valueInput;
    this.setState({ screenCurrent: valueInput });
  };

  equalBtnClicked = () => {
    let valueInput = this.state.screenCurrent;
    let lastChar = valueInput.substr(valueInput.length - 1);

    if (valueInput.length === 0) {
      return;
    }
    if (
      lastChar === "-" ||
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "/"
    )
      return;
    valueInput = eval(valueInput).toString();
    
    let arrValue = valueInput.split(".");
    //Nếu kết quả là số thập phân
    // if (arrValue.length === 1) {
    //   this.setState({ screenCurrent: valueInput });
    // } else if (arrValue.length === 2) {
    //   if (arrValue[1].length <= 4) {
    //     this.setState({ screenCurrent: arrValue[0] + "." + arrValue[1] });
    //   } else {
    //     this.setState({
    //       screenCurrent: arrValue[0] + "." + arrValue[1].substr(0, 4),
    //     });
    //   }
    // }

    if (valueInput.length > 14) {
      if (valueInput.match("/^d+$/")) {
        valueInput = "Big number!";
      } else {
        valueInput = valueInput.substr(0, 14);
      }
    }
    this.setState({ screenCurrent: valueInput });
  };

  delBtnClicked = () => {
    let valueInput = this.state.screenCurrent;
    valueInput = valueInput.substr(0, valueInput.length - 1);
    this.setState({ screenCurrent: valueInput });
    console.log(valueInput);
  };

  resetBtnClicked = () => {
    this.setState({ screenCurrent: "0" });
  };

  render() {
    return (
      <div className="transition-all mt-20">
        <div className="m-6 max-w-max mx-auto">
          {/* TITLE  */}
          <div className="text-skin-screen flex justify-between items-center pb-3">
            <h1 className="text-2xl">Calc</h1>
            <h1 className="text-2xl text-left">Hello</h1>
          </div>
          {/* SCREEN  */}
          <div
            className="bg-skin-screen rounded-xl text-3xl text-skin-screen p-4 pb-3 text-right"
            id="screen"
            style={{ height: "60px" }}
          >
            {this.state.screenCurrent}
          </div>

          {/* KEYPAD  */}
          <div className="bg-skin-keypad rounded-xl grid grid-cols-4 gap-4 p-6 mt-5">
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("7")}
            >
              7
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("8")}
            >
              8
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("9")}
            >
              9
            </div>
            <div
              className="btn btn-accent-1"
              id="delete-button"
              onClick={() => this.delBtnClicked()}
            >
              AC
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("4")}
            >
              4
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("5")}
            >
              5
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("6")}
            >
              6
            </div>
            <div
              className="btn btn-base operator"
              onClick={() => this.btnClicked("+")}
            >
              +
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("1")}
            >
              1
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("2")}
            >
              2
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("3")}
            >
              3
            </div>
            <div
              className="btn btn-base operator"
              onClick={() => this.btnClicked("-")}
            >
              -
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked(".")}
            >
              .
            </div>
            <div
              className="btn btn-base number"
              onClick={() => this.btnClicked("0")}
            >
              0
            </div>
            <div
              className="btn btn-base operator"
              onClick={() => this.btnClicked("/")}
            >
              /
            </div>
            <div
              className="btn btn-base operator"
              onClick={() => this.btnClicked("*")}
            >
              x
            </div>
            <div
              className="btn-wide btn-accent-1"
              id="reset-button"
              onClick={() => this.resetBtnClicked()}
            >
              RESET
            </div>
            <div
              className="btn-wide btn-accent-2"
              id="equal-button"
              onClick={() => this.equalBtnClicked()}
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
