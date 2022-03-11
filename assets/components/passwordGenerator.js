app.component('password-generator', {
    template:
        /*html*/
        `  <div class="containerG">
        <div class="inerContainer">        
        <h1><strong>Need a password? Try the our Strong Password Generator</strong></h1>
        <p>Generate secure, random passwords to stay safe online.</p>

        <div class="resultPG">
            <p>{{result}}</p>
        </div>
        <div class="options">
            <label>طول پسورد</label>
            <input class="inputLength" type="number" id="length" min='4' max='20' v-model="length"/>
        </div>
        <div class="options">
            <label> شامل حروف کوچک بشود</label>
            <input type="checkbox" class="form-check-input"  checked v-model="checkedLowercase">
        </div>
        <div class="options">
            <label> شامل حروف بزرگ بشود</label>
            <input type="checkbox"class="form-check-input"  checked v-model="checkedUppercase">

        </div>

        <div class="options">
            <label>شامل عدد بشود</label>
            <input type="checkbox" class="form-check-input"  checked v-model="checkedNumbers">
        </div>
        <div class="options">
            <label> شامل نشانه ها بشود</label>
            <input type="checkbox" class="form-check-input"  checked v-model="checkedSymbols">
        </div>
        <button class="btnPG" id="generate" @click="Generate">
            تایید
        </button>
        <button type="button" class="btnPG">click to download the code <i class="fab fa-github"></i></button>
        </div>
        
    </div>`,
    data: function () {
        return {
            checkedLowercase: true,
            checkedUppercase: true,
            checkedNumbers: true,
            checkedSymbols: true,
            length: 20,
            result: 'پسورد',
            chechedArray: []
        }
    },

    methods: {
        Generate() {
            this.result = '';
            for (i = 0; i < this.length; i++) {
                this.CheckFunctionArray();
                (this.result) += this.chechedArray[Math.floor(Math.random() * (this.chechedArray.length))];
            }
        },
        //mount checkArray
        CheckFunctionArray() {
            this.chechedArray = [];
            if (this.checkedLowercase) this.chechedArray.push(this.getRandomLower());
            if (this.checkedUppercase) this.chechedArray.push(this.getRandomUpper());
            if (this.checkedNumbers) this.chechedArray.push(this.getRandomNumber());
            if (this.checkedSymbols) this.chechedArray.push(this.getRandomSymbol());
        },
        // Generator functions
        getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        },
        getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        },
        getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
        },
        getRandomSymbol() {
            const symbol = '!@#$%^&*()_+=-*\|/`~<>,.?:;'
            return symbol[Math.floor(Math.random() * symbol.length)]
        }
    }

});