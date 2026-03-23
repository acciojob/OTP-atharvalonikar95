//your JS code here. If required.
const fields = document.querySelectorAll('.code')

fields[0].focus();

fields.forEach((field,index)=>{
	field.addEventListener('input',(e)=>{
		const val = e.target.value;
		if(val.length>1){
			field.value=val.slice(0,1)
		}
		if(val && index<fields.length-1){
			fields[index+1].focus()
		}
	})
	field.addEventListener('keydown',(e)=>{
		if(e.key==="Backspace"){
			if(!field.value &&index>0){
				fields[index-1].focus();
			}
		}
	}
)
})



