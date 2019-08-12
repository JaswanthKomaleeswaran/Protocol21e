function validateform()
{	
	var y=document.forms["myform"]["q4"].value;
	if(y=="" ||y==null)
	{
		alert("Institution name can't be left empty");
		return false;
	}
	else{
		var p2=/[\w\W]/g;
		var b2=p2.test(y.value);
		if(b2==false)
		{
			alert("Institution name should be of alphabets only");
			return false;
		}
	}
	var n=document.forms["myform"]["q5"].value;
	if(n=="" || n==null)
	{
		alert("mobile number can't be left blank");
		return false;
	}
	else{
		var p1= /[0-9]{10}/g;		
		var b1=p1.test(n.value);
		if(b1==false)
			{
				alert("enter valid mobile number");
				return false;
			}
		}

	var x=document.forms["myform"]["q1"].value; 
    if(x==null || x=="" )
    {
        alert("name can't be left blank");
        return false;
    }
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.q2.value))
	{
		return true;
	}
	else
	{
	alert("You have entered an invalid email address!")
	return false;
	}
}
	
	
	
	
