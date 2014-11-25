var vals = [];//for type
			 var vals1 = [];//for brand
			 var vals2=[];//for price
			 $(document).ready(function () {
              var protype=document.getElementById("protype").value;
				 var $checkes = $('input:checkbox[name="check[]"]').change(function () {
					 vals = $checkes.filter(':checked').map(function () {
						 return this.value;
					 }).get();
								 //alert("func");
								//alert(JSON.stringify(vals));
										// alert(JSON.stringify(vals1));    
								var flag=0;
								var results = document.getElementById("results");

										results.innerHTML = "";
										


										 //if all the three check boxes are selected
										for(var i in vals){
										 for(var obj in data){
										  for(var j in vals1){
										   for(var k in vals2){
										     flag=3;
											//assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                             if(data[obj].type==vals[i] && data[obj].brand==vals1[j] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													//alert("three");
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
											}//inner inner loop
										}//inner loop
										}//data loop
										}//outer loop
                                        
										//only type and brand checkboxex are selected
                                        if(flag==0){
										for(var i in vals){
										 for(var obj in data){
										  for(var j in vals1){
											   flag=2;
                                             if(data[obj].type==vals[i] && data[obj].brand==vals1[j]  && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
												//	alert(link);
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//outer if loop



										 //if only two check boxes are selected(type and price)
										if(flag==0){
										for(var i in vals){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											// alert(price);
											// alert(price1);
                                               flag=2;
                                             if(data[obj].type==vals[i] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										        
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if

                                         //if only two check boxes are selected(brand and price)
										if(flag==0){
										for(var i in vals1){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											// alert(price);
											// alert(price1);
                                                flag=2;
                                             if(data[obj].brand==vals1[i] && data[obj].price>=price && data[obj].price<=price1  && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if

                                        //if only brand check box is selected 
										if(flag==0)
										{
												for(var i in vals1){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].brand==vals1[i]  && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)


										
										//if only price check box is selected 
										if(flag==0)
										{
												for(var k in vals2){
												  
												 //assigning value to price
												 var price=0,price1=0;
												 if(vals2[k]==1)
												 {price=0;price1=1000;}
												 else if(vals2[k]==2)
												 {price=1000;price1=3000;}
												  else if(vals2[k]==3)
												 {price=3000;price1=5000;}
												  else if(vals2[k]==4)
												 {price=5000;price1=7000;}
												  else if(vals2[k]==5)
												 {price=7000;price1=9000;}
												  else if(vals2[k]==6)
												 {price=9000;price1=1000000;}

												 for(var obj in data){
													 flag=1;
													 if(data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)


										//if only type checkbox is selected 
										if(flag==0)
										{
												for(var i in vals){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].type==vals[i] && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert(link);
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)


										if(flag==0)
										{
											  for(var obj in data){
												if( data[obj].category==protype)
												{
													id=data[obj].id;
													link="details.html?id="+id
													//	alert(link);
													results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
												}
											}
										}//if flag

		     }); //end of first func

				 var $checkes1 = $('input:checkbox[name="Brand[]"]').change(function () {
					 vals1 = $checkes1.filter(':checked').map(function () {
						 return this.value;
					 }).get();
                     
					// alert(JSON.stringify(vals));
					// alert(JSON.stringify(vals1));

								var flag=0;
								var results = document.getElementById("results");
										results.innerHTML = "";
										//alert(JSON.stringify(vals));
										// alert(JSON.stringify(vals1));

                                        //if all the three check boxes are selected
										for(var i in vals1){
										 for(var obj in data){
										  for(var j in vals){
										   for(var k in vals2){
										    
											//assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
											   flag=3;
                                             if(data[obj].brand==vals1[i] && data[obj].type==vals[j] && data[obj].price>=price && data[obj].price<=price1  && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
												//	alert("three");
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
											}//inner inner loop
										}//inner loop
										}//data loop
										}//outer loop
                                  
                                        //if only two check boxes are selected(brand and type)
										if(flag==0){
										for(var i in vals1){
										 for(var obj in data){
										  for(var j in vals){
											   flag=2;
                                             if(data[obj].brand==vals1[i] && data[obj].type==vals[j]  && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
												//alert("brandtype");
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
										}//flag if


                                        //if only two check boxes are selected(brand and price)
										if(flag==0){
										for(var i in vals1){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											// alert(price);
											// alert(price1);
                                                flag=2;
                                             if(data[obj].brand==vals1[i] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if
                                        
										 //if only two check boxes are selected(type and price)
										if(flag==0){
										for(var i in vals){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											// alert(price);
											// alert(price1);
                                               flag=2;
                                             if(data[obj].type==vals[i] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if

                                        //if only price check box is selected 
										if(flag==0)
										{
												for(var k in vals2){
												  
												 //assigning value to price
												 var price=0,price1=0;
												 if(vals2[k]==1)
												 {price=0;price1=1000;}
												 else if(vals2[k]==2)
												 {price=1000;price1=3000;}
												  else if(vals2[k]==3)
												 {price=3000;price1=5000;}
												  else if(vals2[k]==4)
												 {price=5000;price1=7000;}
												  else if(vals2[k]==5)
												 {price=7000;price1=9000;}
												  else if(vals2[k]==6)
												 {price=9000;price1=1000000;}

												 for(var obj in data){
													 flag=1;
													 if(data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)


										//if only type checkbox is selected 
										if(flag==0)
										{
												for(var i in vals){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].type==vals[i] && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert(link);
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)

										//if only brand check box is selected 
										if(flag==0)
										{
												for(var i in vals1){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].brand==vals1[i] && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)

											if(flag==0)
										{
											  for(var obj in data){
												if(data[obj].category==protype)
												{
													id=data[obj].id;
													link="details.html?id="+id
													//	alert(link);
													results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
												}
											}
										}//if flag
										


				 });//end of second fun


				  var $checkes2 = $('input:checkbox[name="p[]"]').change(function () {
					 vals2 = $checkes2.filter(':checked').map(function () {
						 return this.value;
					 }).get();

					            var flag=0;
								var results = document.getElementById("results");

										results.innerHTML = "";
										//alert(JSON.stringify(vals));
										// alert(JSON.stringify(vals1));

                                        //if all the three check boxes are selected
										for(var i in vals1){
										 for(var obj in data){
										  for(var j in vals){
										   for(var k in vals2){
										    
											//assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
											   flag=3;
                                             if(data[obj].brand==vals1[i] && data[obj].type==vals[j] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													//alert("three");
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
											}//inner inner loop
										}//inner loop
										}//data loop
										}//outer loop
                                  
                                        //if only two check boxes are selected(brand and price)
										if(flag==0){
										for(var i in vals1){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											 //alert(price);
											// alert(price1);
                                              flag=2;
                                             if(data[obj].brand==vals1[i] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if


                                        //if only two check boxes are selected(type and price)
										if(flag==0){
										for(var i in vals){
										 for(var obj in data){
										  for(var k in vals2){

										      //assigning value to price
										     var price=0,price1=0;
										     if(vals2[k]==1)
											 {price=0;price1=1000;}
											 else if(vals2[k]==2)
											 {price=1000;price1=3000;}
											  else if(vals2[k]==3)
											 {price=3000;price1=5000;}
											  else if(vals2[k]==4)
											 {price=5000;price1=7000;}
											  else if(vals2[k]==5)
											 {price=7000;price1=9000;}
											  else if(vals2[k]==6)
											 {price=9000;price1=1000000;}
                                            
											// alert(price);
											 //alert(price1);
                                             flag=2;
                                             if(data[obj].type==vals[i] && data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
										        
												id=data[obj].id;
												link="details.html?id="+id
													
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//flag if
                                        
										//only type and brand checkboxex are selected
                                        if(flag==0){
										for(var i in vals){
										 for(var obj in data){
										  for(var j in vals1){
											   flag=2;
                                             if(data[obj].type==vals[i] && data[obj].brand==vals1[j] && data[obj].category==protype){
										       
												id=data[obj].id;
												link="details.html?id="+id
												//	alert(link);
												results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
											}//if loop
										}//inner loop
										}//data loop
										}//outer loop
                                        }//outer if loop

                                        //if only type checkbox is selected 
										if(flag==0)
										{
												for(var i in vals){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].type==vals[i] && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert(link);
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)

										//if only brand check box is selected 
										if(flag==0)
										{
												for(var i in vals1){
												 for(var obj in data){
													 flag=1;
													 if(data[obj].brand==vals1[i] && data[obj].category==protype){
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)

										//if only price check box is selected 
										if(flag==0)
										{
												for(var k in vals2){
												  
												 //assigning value to price
												 var price=0,price1=0;
												 if(vals2[k]==1)
												 {price=0;price1=1000;}
												 else if(vals2[k]==2)
												 {price=1000;price1=3000;}
												  else if(vals2[k]==3)
												 {price=3000;price1=5000;}
												  else if(vals2[k]==4)
												 {price=5000;price1=7000;}
												  else if(vals2[k]==5)
												 {price=7000;price1=9000;}
												  else if(vals2[k]==6)
												 {price=9000;price1=1000000;}

												 for(var obj in data){
													 flag=1;
													 if(data[obj].price>=price && data[obj].price<=price1 && data[obj].category==protype){
														 
														id=data[obj].id;
														link="details.html?id="+id
															//alert("one");
														results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
													}//if loop
												}//data loop
												}//outer loop
										}//end of if (flag=0)

											if(flag==0)
										{
											  for(var obj in data){
												if(data[obj].category==protype)
												{
													id=data[obj].id;
													link="details.html?id="+id
													//	alert(link);
													results.innerHTML += "<div class='col-sm-4'>"+
															"	<div class='product-image-wrapper'>"+
															"		<div class='single-products'>"+
															"				<div class='productinfo text-center'>"+
															"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
															"					<h2>Rs. "+data[obj].price+"</h2>"+
															"					<p>"+data[obj].name+"</p>"+
															"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"				</div>"+
															"				<div class='product-overlay'>"+
															"					<div class='overlay-content'>"+
															"						<p>"+data[obj].description+"</p>"+
															"						<h2>Rs. "+data[obj].price+"</h2>"+
															"						<p>"+data[obj].name+"</p>"+
															"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
															"					</div>"+
															"				</div>"+
															"		</div>"+
															"		<div class='choose'>"+
															"			<ul class='nav nav-pills nav-justified'>"+
															"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
															"			</ul>"+
															"		</div>"+
															"	</div>"+
															"</div>"
												}
											}
										}//if flag


                  });//end of third fun   


           
			 });//end of ready function
