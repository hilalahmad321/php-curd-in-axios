<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Php Crud in Axios</title>
</head>

<body>
    <div class="fluid-container">
        <h1 class="text-capitalize">Php Crud in Axios</h1>
    </div>
    <div id="error_message"></div>
    <div id="success_message"></div>
    <div class="card">
        <div class="left-side">
            <h3>Student ( <span id="count"></span> )</h3>
        </div>
        <div class="right-side">
            <button class="btn btn-black" id="show_model">Add Student</button>
        </div>
    </div>
    <div class="form-group">
        <input type="text" onkeyup="searchData()" placeholder="Search Here...." name="search" id="search"
            class="form-control">
    </div>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Age</th>
                    <th>Student City</th>
                    <th>Edit</th>
                    <th>Deete</th>
                </tr>
            </thead>
            <tbody id="tbody"></tbody>
        </table>
    </div>
    <div id="model">
        <div class="model-content">
            <h1>Add Record</h1>
            <form action="" id="submit_form" method="POST">
                <div class="form-group">
                    <label for=""><b>Enter your Name</b></label>
                    <input type="text" name="username" id="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for=""><b>Enter your Age</b></label>
                    <input type="number" name="age" id="age" class="form-control">
                </div>
                <div class="form-group">
                    <label for=""><b>Enter your City</b></label>
                    <input type="text" name="city" id="city" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-black" id="save_data">Save</button>
                </div>
            </form>
            <div class="close-btn">
                <button class="btn btn-danger" onclick="hide_model()">X</button>
            </div>
        </div>
    </div>
    <div id="updateModel">
        <div class="model-content">
            <h1>Add Record</h1>
            <form action="" id="submit_form" method="POST">
                <div class="form-group">
                    <label for=""><b>Enter your Name</b></label>
                    <input type="text" name="username" id="edit_username" class="form-control">
                    <input type="hidden" name="id" id="edit_id" class="form-control">
                </div>
                <div class="form-group">
                    <label for=""><b>Enter your Age</b></label>
                    <input type="number" name="age" id="edit_age" class="form-control">
                </div>
                <div class="form-group">
                    <label for=""><b>Enter your City</b></label>
                    <input type="text" name="city" id="edit_city" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-black" id="update_data">Update</button>
                </div>
            </form>
            <div class="close-btn">
                <button class="btn btn-danger" onclick="hide_model()">X</button>
            </div>
        </div>
    </div>
    <script src="js/axios.min.js"></script>
    <script src="js/app.js"></script>

</body>

</html>