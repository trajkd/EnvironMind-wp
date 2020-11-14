( function( $ ) {
    var socket = io();
    var uid=14;
socket.emit('validate',uid);
$('.room__input').keypress(function(event){
 
if ( event.which == 13 ) {        
        data={
        id:uid,
        msg:$("#room__input").val()
        };
        socket.emit('send msg',data);
            $("#room__input").val('');
        }
    });
 
socket.on('user entrance',function(data){
if(uid!="0"){
$("#chatbox").append("<div class='col-xs-12'><h2><center>"+data.info+"</center></h2></div>");
console.log(data.message);
for(var i=0;i<data.message.length;i++){
if(data.message[i]['uid']==uid){
    $(".room__messages").append(`<div class="vue-room-message">
                                            <!----> 
                                            <div class="room-message__container rtl">
                                                <!----> <!----> 
                                                <div class="room-message personal">
                                                    <div class="room-message__header">
                                                        <div class="room-message__info">
                                                            <div class="room-message__name">
                                                                You
                                                            </div>
                                                            <div class="room-message__time">`+data.message[i].time+`</div>
                                                        </div>
                                                        <!---->
                                                    </div>
                                                    <div class="room-message__content">Hello`+data.message[i].messages+`</div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>`);
}else{
    $(".room__messages").append(`<div class="vue-room-message">
                                    <div class="room-message__container ltr">
                                        <div class="room-message__user is-participant">
                                            <div class="idt-user-avatar room-message__user__avatar" style="width: 37px; height: 37px;"></div>
                                        </div>
                                        <!----> 
                                        <div class="room-message">
                                            <div class="room-message__header">
                                                <div class="room-message__info">
                                                    <div class="room-message__name">`+data.message[i].name+`</div>
                                                    <div class="room-message__time">`+data.message[i].time+`</div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="room-message__content">`+data.message[i].messages+`</div>
                                            <!---->
                                        </div>
                                    </div>
                                </div>`);
}
}
} 
});
 
socket.on('get msg',function(data){
if(data.id==uid){
    $(".room__messages").append(`<div class="vue-room-message">
                                    <!----> 
                                    <div class="room-message__container rtl">
                                        <!----> <!----> 
                                        <div class="room-message personal">
                                            <div class="room-message__header">
                                                <div class="room-message__info">
                                                    <div class="room-message__name">
                                                        You
                                                    </div>
                                                    <div class="room-message__time">`+data.date+`</div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="room-message__content">Hello`+data.message+`</div>
                                            <!---->
                                        </div>
                                    </div>
                                </div>`);
}else{
    $(".room__messages").append(`<div class="vue-room-message">
                                    <div class="room-message__container ltr">
                                        <div class="room-message__user is-participant">
                                            <div class="idt-user-avatar room-message__user__avatar" style="width: 37px; height: 37px;"></div>
                                        </div>
                                        <!----> 
                                        <div class="room-message">
                                            <div class="room-message__header">
                                                <div class="room-message__info">
                                                    <div class="room-message__name">`+data.user+`</div>
                                                    <div class="room-message__time">`+data.date+`</div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="room-message__content">`+data.message+`</div>
                                            <!---->
                                        </div>
                                    </div>
                                </div>`);
}
});
 
} )( jQuery );