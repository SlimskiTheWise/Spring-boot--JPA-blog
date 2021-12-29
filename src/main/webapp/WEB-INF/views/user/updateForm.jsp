


<%@include file="../layout/header.jsp"%>

<div class="container">
    <form action>
        <input type="hidden" id="id" value="${principal.user.id}">
        <div class="form-group">
           <label for="username">Username:</label>
            <input type="text" value="${principal.user.username}" class="form-control" placeholder="Enter Username" id="username" readonly>
        </div>

        <c:if test="${empty principal.user.oauth}">
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" value="${principal.user.password}" class="form-control" placeholder="Enter password" id="password">
            </div>
        </c:if>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" value="${principal.user.email}" class="form-control" placeholder="Enter email" id="email" readonly>
        </div>




    </form>
    <button id="btn-update" class="btn btn-primary">Submit</button>
</div>
<script src="/js/user/user.js"></script>
<%@include file="../layout/footer.jsp"%>

