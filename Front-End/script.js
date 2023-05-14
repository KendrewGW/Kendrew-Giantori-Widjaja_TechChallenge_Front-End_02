$( "#validation" ).validate( {
    rules:{
        email:{
            email:true
        }
    },
    messages: {
        name:{
            required: "Masukkan nama",
        },
        email:{
            required: "Masukkan Email"
        }
    },

    submitHandler: function(form){
        form.submit();
    }
  });   