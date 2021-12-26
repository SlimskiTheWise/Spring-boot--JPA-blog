

<%@include file="../layout/header.jsp"%>

<div class="container">

  <button class="btn btn-secondary" onclick="history.back()">Back</button>

  <c:if test="${board.user.id==principal.user.id}">
     <button class="btn btn-danger" id="btn-delete">Delete</button>
     <a href="/board/${board.id}/updateForm" class="btn btn-warning" id="btn-update">Edit</a>
  </c:if>
  <br><br>
  <div>
    post number: <span id="id"><i>${board.id} </i></span>
    writer: <span><i>${board.user.username} </i></span>
  </div>
  <br><br>
    <div class="form-group">
      <h3>${board.title}</h3>
    </div>
      <hr/>
    <div class="form-group">
      <div>${board.content}</div>
    </div>
    <hr/>

</div>

<script>
  $('.summernote').summernote({
    tabsize: 2,
    height: 300
  });
</script>
<script src="/js/user/board.js"></script>

<%@include file="../layout/footer.jsp"%>

