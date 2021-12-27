let index ={
    init:function(){
        $("#btn-save").on("click",()=>{
            this.save();
        });
        $("#btn-update").on("click",()=>{
            this.update();
        });
    },

    save:function(){
        // alert('user의 save함수 호출됨');
        let data = {
            username:$("#username").val(),
            password:$("#password").val(),
            email:$("#email").val()
        }
        // console.log(data);

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"POST",
            url:"/auth/joinProc",
            data:JSON.stringify(data),//http body 데이터
            contentType:"application/json;charset=utf-8",//body데이타가 어떤 타입인지 (MIME)
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("회원가입이 완료되었습니다.");
            location.href ="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },

    update:function(){
        // alert('user의 save함수 호출됨');
        let data = {
            id:$("#id").val(),
            username:$("#username").val(),
            password:$("#password").val(),
            email:$("#email").val()
        }
        // console.log(data);

        //ajax 호출시 default 가 비동기
        $.ajax({
            type:"PUT",
            url:"/user",
            data:JSON.stringify(data),//http body 데이터
            contentType:"application/json;charset=utf-8",//body데이타가 어떤 타입인지 (MIME)
            dataType:"json"//요청을 서버로해서 응답이 왔을 때 기보적으로 모든 것이 문자 (생긴게 json이라면) 자바스크립트로 변경해준다.
        }).done(function(resp){
            alert("회원수정이 완료되었습니다.");
            location.href ="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });//ajax 를 이용하여 3 개의 데이터를 json으로 변경하여 insert요청
    },


}

index.init();