$(document).ready(function () {
//    Agregar();
Totalproducto()
});

let datos=[
    {
        nombre:'Gato',
        Tipo:'Felino',
        Descripcion:'Mamifero',
        comentario:'Ogareno',
        precio:65
    },
    {
        nombre:'Perro',
        nombre:'Canino',
        Descripcion:'Mamifero',
        comentario:'Ogareno',
        precio:58
    },
    {
        nombre:'Pato',
        Tipo:'Ave',
        Descripcion:'Viviparo',
        comentario:'campo',
        precio:12
    },   
    {
        nombre:'Conejo',
        Tipo:'Felino',
        Descripcion:'Mamifero',
        comentario:'Silvestre',
        precio:20

    }
]

//insertar elementos en una tabla
    $.each(datos, function (indexInArray, valueOfElement) { 
     $(".productos tbody").append(
        "<tr>"+
             "<td class = 'cantidad mdl-data-table__cell--non-numeric '>"+
                 "<input type='number' value=0 min=1>"+
             "</td>"+
             "<td class= ' mdl-data-table__cell--non-numeric'>"+
                valueOfElement.nombre+
            "</td>"+
            "<td class='precio mdl-data-table__cell--non-numeric'>"+
                "<input type='number' value=0 min=1>"+
            "</td>"+
            "<td class='resultado mdl-data-table__cell--non-numeric'>"+
            
            "</td>"+
        "</tr>" 
        );

});


Totalproducto=function(){
    var cantidad ,precio,total,subtotal=0,iva,TTotal

   $('.productos tr').change(function(){
          var x=$(this). children('td')                     
          cantidad=$(x).eq(0).children('input').val()
          precio=$(x).eq(2).children('input').val()
          total=parseInt(cantidad)*parseInt(precio)
          x.eq(3).html(total)


            subtotal=subtotal+total
            iva=subtotal*12/100 
            TTotal=subtotal+iva  
            $(".subtotal").html(subtotal)
            $('.iva').html(iva)
            $('.Total').html(TTotal)


        });


    }


/* 

 */