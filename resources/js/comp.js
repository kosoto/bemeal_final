var ui = ui || {};
ui = { 
		btn : x=>{  //kui.btn({id:'',size:'mini',color:'red',txt:'주문하기'})
			// size : big, mini // color (red, blue, gree, purple, yellow, grey, redp )-> kaeun.css 버튼 참조
			return $('<button/>').attr({type : 'button', id: x.id})
			.addClass('btn-two '+x.color+' '+x.size)
			.html(x.txt);
		},
		checkbox : x=>{ //kui.checkbox({id:'',txt:''})
			let p = $('<span/>').addClass('form-check');
			$('<input/>').attr({type:'checkbox', id:x.id, name:'cartchk'}).prop("checked", false)
			.addClass('form-check-input').appendTo(p);
			$('<label/>').attr({type:'label'})
			.addClass('form-check-label').html(x.txt+"　").appendTo(p);
			return p;
		},
		content_g : x=>{ // ui.content_g();
			return $('#k_contentlot').empty().html('<div class="container">'
					  +'<div class="k_header"><div id="k_header"/></div>' 
					  +'<div class="k_contentlot"><div id="k_content"/></div>'
					  +'</div>');
		},
		newpage : ()=>{
			return $('#k_content').remove()
				   +$('#k_header').remove()
				   +$('#k_footer').remove()
				   + $('#k_contentlot').append(
			       			$('<div>').addClass("container").append(
			       					ui.div({id:"k_header",clazz:"k_header"}),
			       					ui.div({id:"k_content",clazz:"k_content"}),
			       					ui.div({id:"k_footer",clazz:"k_footer"})
			       			)
			       	   );
		},
		a_col : x=>{ //ui.a_col({claz:'',id:''});
			return  '<div class="'+x.claz+'">'
			+'<div class="row">'
			+'<div class="col">'
			+'<div id="'+x.id+'">'
			+'</div>'
			+'</div>'
			+'</div>'
			+'</div>';			
		},
		n_div : x=>{ // ui.n_div({clazz:'',html:'',to:''});
			return $('<div/>').addClass(x.clazz).html(x.html).appendTo(x.to);
		},
		div : x=>{// ui.div({id:"",clazz:""})
			return $('<div/>').addClass(x.clazz).attr({id:x.id});
			}, 
		span : x=>{
			return $('<span/>').attr({id:x});}, // kui.span("id"};
		grid_list : x=>{ //kui.cart_list({c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:""})
			let t = x.to; 
			return ui.n_div({clazz:'iteminfo',html:x.c1,to:t})
				  +ui.n_div({clazz:'iteminfo1',html:x.c2,to:t})
				 + ui.n_div({clazz:'itemname',html:x.c3,to:t})
				 + ui.n_div({clazz:'iteminfo',html:x.c4,to:t})
				 + ui.n_div({clazz:'iteminfo',html:x.c5,to:t})
				 + ui.n_div({clazz:'iteminfo',html:x.c6,to:t})
				 + ui.n_div({clazz:'iteminfo',html:x.c7,to:t});
		},
		img_card : x=>{ //ui.img_card({url:'',txt:'',id:''});
			return '<span id="'+x.id+'" class="card" style="width: 16rem;">'
			+'<img class="card-img-top" src="'+x.url+'/100px180/?text=Image cap" alt="Card image cap">'
			+'<div class="card-body">'
			+'<p class="card-text">'+x.txt+'</p>'
			+'</div>'
			+'</span>';
		}
};