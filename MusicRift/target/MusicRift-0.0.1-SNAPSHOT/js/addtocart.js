
    function toggle_visibility(id) {
        var e = document.getElementById(id);
		
        //alert("Style"+e.style.display);
        if(e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }


var cartList = [];
var cartNames = [];
var cartPrice = [];
var cartQty = [];
function addtocart(val){
	
    // alert(val);
    var image = document.getElementById("image"+val).src;
    //alert(image);
    var name=document.getElementById("name"+val).innerHTML;
    //alert(name);
    var price=document.getElementById("price"+val).innerHTML;
    var index= cartList.indexOf(image);
    if(index == -1)
    {
        //alert("if");
        cartList.push(image);
        cartNames.push(name);
        cartPrice.push(price);
        cartQty.push(1);

        for (i = 0; i < cartList.length; i++) {
            //alert(cartList[i]);
            var newCart = " <img src=" + cartList[i] + "  width='50px' height='40px' > &nbsp;&nbsp;&nbsp;" + cartNames[i] +
                "&nbsp;&nbsp;&nbsp;QTY :<input  type='text' style='width:50px;'  name='qty' value=" + cartQty[i] + " onchange='qtyonclick(this.value," + i + ");' /> " +
                "&nbsp;&nbsp;&nbsp;Price :" + cartPrice[i] * cartQty[i] + "<i class='fa fa-inr'></i><img class='img' src='..\\images\\rupee.jpg'>&nbsp;&nbsp;&nbsp;" +
                "<a href='#' onClick='removeRecord(" + i + ");'><font color='red'> remove</font></a>&nbsp;&nbsp;&nbsp;</div></div></div><br><br>";
        }

        //alert(newCart);

        document.getElementById('cart').innerHTML += newCart;

    }
    else {
        //alert("else");
        cartQty[index] = cartQty[index] + 1;
        var newCart="";
        for (i = 0; i < cartList.length; i++) {
            //alert(cartList[i]);
            newCart += " <img src=" + cartList[i] + "  width='50px' height='40px' > &nbsp;&nbsp;&nbsp;" + cartNames[i] +
            "&nbsp;&nbsp;&nbsp;QTY :<input  type='text' style='width:50px;'  name='qty' value=" + cartQty[i] + " onchange='qtyonclick(this.value," + i + ");' /> " +
            "&nbsp;&nbsp;&nbsp;Price :" + cartPrice[i] * cartQty[i] + "<i class='fa fa-inr'></i>&nbsp;&nbsp;&nbsp;" +
            "<a href='#' onClick='removeRecord(" + i + ");'><font color='red'>remove</font></a>&nbsp;&nbsp;&nbsp;</div></div></div><br><br>";
        }

        //alert(newCart);
        document.getElementById('cart').innerHTML = newCart;
    }



}
function qtyonclick(v,ival)
{
    //alert("qtyonclick");
    //alert("qty"+v);
   // alert("index"+ival);
    cartQty[ival]=v;
    var newCart="";
    for (i = 0; i < cartList.length; i++)	{
        //alert(cartList[i]+"---"+cartQty[i]+"-----"+cartPrice[i]);
        newCart  += " <img src=" + cartList[i] + "  width='50px' height='40px' > &nbsp;&nbsp;&nbsp;"+ cartNames[i] +
        "&nbsp;&nbsp;&nbsp;QTY :<input  type='text' style='width:50px;'  name='qty' value="+ cartQty[i] +" onchange='qtyonclick(this.value," + i + ");' /> " +
        "&nbsp;&nbsp;&nbsp;Price :" + cartPrice[i]*cartQty[i] +" <i class='fa fa-inr'></i>&nbsp;&nbsp;&nbsp;" +
        "<a href='#' onClick='removeRecord(" + i + ");'><font color='red'>remove</font></a>&nbsp;&nbsp;&nbsp;</div></div></div><br><br>";
    };
    //alert(newCart);
    document.getElementById('cart').innerHTML = newCart;
}
function removeRecord (i) {
    //alert("remove");
    cartList.splice(i, 1);
    var newCart="";
    // re-display the records from cartList the same way we did it in addToCart()
    for (var i = 0; i < cartList.length; i++) {
        //alert(cartList[i]);
        newCart += " <img src=" + cartList[i] + "  width='50px' height='40px' > &nbsp;&nbsp;&nbsp;"+ cartNames[i] +
        "&nbsp;&nbsp;&nbsp;QTY :<input  type='text' style='width:50px;'  name='qty' value="+ cartQty[i] +" onchange='qtyonclick(this.value," + i + ");' /> " +
        "&nbsp;&nbsp;&nbsp;price :" + cartPrice[i]*cartQty[i] +"<i class='fa fa-inr'></i>&nbsp;&nbsp;&nbsp;" +
        "<a href='#' onClick='removeRecord(" + i + ");'><font color='red'>remove</font></a>&nbsp;&nbsp;&nbsp;</div></div></div><br><br>";
    };
   // alert(newCart);
    if(newCart=="")
        document.getElementById('cart').innerHTML =" No items to Display";
    else
    document.getElementById('cart').innerHTML = newCart;
}
function addtocart1(val){
    alert("v");
    alert(val);
    alert("i");
    var image = document.getElementById(val).src;
    alert(image);

}
