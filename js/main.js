new Vue({

el:'#imcform',
data:{
	altura:'',
	peso:'',
	resultado:'',
	resultadoFinal:'',
	userResult:'',
	activeColor:''
},

methods:{
	calcularIMC: function(e){
		e.preventDefault();
		this.resultado = this.peso / ((this.altura * this.altura)/10000)
		this.resultadoFinal = this.resultado.toFixed(2);
		if(this.resultadoFinal < 18){
			this.userResult = "You're underweight!";
			this.activeColor = "red";
		}

	
		else if(this.resultadoFinal <= 25){
			this.userResult = "You're normal weight!";
			this.activeColor="green";

		}

		else if (isNaN(this.resultadoFinal)){
			this.userResult = "Type valid numbers!";
			this.activeColor="black";
			this.resultadoFinal = "Invalid user inputs";
		}

		else if (this.resultadoFinal > 25){
			this.userResult = "You're overweight!";
			this.activeColor="red";
		}

		else if(this.resultadoFinal < 0){
			this.userResult = "Type valid numbers!";
			this.activeColor="black";
		}





	}
}

});
