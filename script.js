var navstatus=0

function opennav(){
    // navstatus==false or navstaus=0 =>!navstatus
   
    if(!navstatus){
        $(".maindiv").css('width','100%')
        $('li').css('display','block')
        navstatus=1
    }
     //navstatus===true or navstatus=1=>navstatus
    else{
        $('.maindiv').css('width','0')
        $('li').css('display','none')
        // visible,hidden
        navstatus=0
    }   
}