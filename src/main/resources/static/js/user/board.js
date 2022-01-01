let index ={
    init:function(){
        $("#btn-save").on("click",()=>{
            this.save();
        });
        $("#btn-delete").on("click",()=>{
            this.deleteById();
        });
        $("#btn-update").on("click",()=>{
            this.update();
        });
        $("#btn-reply-save").on("click",()=>{
            this.replySave();
        });
    },

    save:function(){
        // alert('user의 save함수 호출됨');
        let data = {
            title:$("#title").val(),
            content:$("#content").val()
        }
        // console.log(data);

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"POST",
            url:"/api/board",
            data:JSON.stringify(data),//http body 데이터
            contentType:"application/json;charset=utf-8",//body데이타가 어떤 타입인지 (MIME)
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("you have submitted");
            location.href ="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },

    deleteById:function(){
        let id = $("#id").text();

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"DELETE",
            url:"/api/board/"+id,
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("the post has been deleted");
            location.href ="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },

    update:function(){

        let id=$("#id").val();

        let data = {
            title:$("#title").val(),
            content:$("#content").val()
        }
        // console.log(data);

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"PUT",
            url:"/api/board/"+id,
            data:JSON.stringify(data),//http body 데이터
            contentType:"application/json;charset=utf-8",//body데이타가 어떤 타입인지 (MIME)
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("you have completed editing");
            location.href ="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },

    replySave:function(){
        // alert('user의 save함수 호출됨');
        let data = {
            userId: $("#userId").val(),
            boardId: $("#boardId").val(),
            content:$("#reply-content").val()
        }

        let boardId= $("#boardId").val()

        console.log(boardId);

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"POST",
            url:`/api/board/${data.boardId}/reply/`,
            data:JSON.stringify(data),//http body 데이터
            contentType:"application/json;charset=utf-8",//body데이타가 어떤 타입인지 (MIME)
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("you left a comment");
            location.href = `/board/${data.boardId}`;
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },

    replyDelete:function(boardId,replyId){
        // alert('user의 save함수 호출됨');

        $.ajax({
            type:"DELETE",
            url:`/api/board/${boardId}/reply/${replyId}`,
            data:JSON.stringify(data),//http body 데이터
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("you left a comment");
            location.href = `/board/${boardId}`;
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },
}

index.init();