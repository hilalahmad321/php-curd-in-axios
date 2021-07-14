const showModel = document.getElementById("show_model");
const model = document.getElementById("model");
showModel.addEventListener("click", () => {
    model.style.display = "flex";
});
const updateModel = document.getElementById("updateModel");

const hide_model = () => {
    model.style.display = "none";
    updateModel.style.display = "none";
}

async function loadData() {
    try {
        const result = await axios.get("php/load-data.php");
        // console.log(result.data);
        // console.log(result.data["empty"]);
        var tbody = document.getElementById("tbody");
        var tr = "";
        if (result.data["empty"] == "empty") {
            tr += "<tr ><td colspan='6' align='center'>Data not Found</td></tr>"
        } else {
            for (const i in result.data) {
                tr += `
                <tr>
                <td>${parseInt(i) + 1}</td>
                <td>${result.data[i].username}</td>
                <td>${result.data[i].age}</td>
                <td>${result.data[i].city}</td>
                <td><button class='btn btn-primary' onclick=editData(${result.data[i].id})>Edit</button></td>
                <td><button class='btn btn-danger' onclick=deleteData(${result.data[i].id})>Delete</button></td>
            </tr>
                `;
            }
        }
        tbody.innerHTML = tr;
    } catch (error) {
        show_message("error", error);
    }
}
loadData();


async function countData() {
    try {
        const result = await axios.get("php/count-data.php");
        // console.log(result.data);
        // console.log(result.data["empty"]);
        var count = document.getElementById("count");
        count.innerText = result.data;
    } catch (error) {
        show_message("error", error);
    }
}
countData();



const submitData = document.getElementById("save_data");
const saveData = async (e) => {
    try {
        e.preventDefault();
        var username = document.getElementById("username").value;
        var age = document.getElementById("age").value;
        var city = document.getElementById("city").value;

        if (username === "" || age === "" || city === "") {
            show_message("error", "Please fill all field");
        } else {
            const student = {
                "username": username,
                "age": age,
                "city": city
            };
            const jsonData = JSON.stringify(student);
            const response = await axios.post("php/insert-data.php", jsonData);
            // console.log(response.data);
            if (response.data.insert === "success") {

                show_message("success", "Data Add Successfully");
                hide_model();
                document.getElementById("submit_form").reset();
                loadData();
                countData();

            } else {
                show_message("error", "Data is faild");
            }
        }
    } catch (error) {
        show_message("error", error);
    }

}
submitData.addEventListener("click", saveData);


const editData = async (id) => {
    try {
        updateModel.style.display = "flex";
        const result = await axios.get(`php/edit-data.php?id=${id}`);

        for (const i in result.data) {
            document.getElementById("edit_id").value = result.data[i].id;
            document.getElementById("edit_username").value = result.data[i].username;
            document.getElementById("edit_age").value = result.data[i].age;
            document.getElementById("edit_city").value = result.data[i].city;
        }
    } catch (error) {
        show_message("error", error);
    }

}

const update = document.getElementById("update_data");
const updateData = async (e) => {
    try {
        e.preventDefault();
        var id = document.getElementById("edit_id").value;
        var username = document.getElementById("edit_username").value;
        var age = document.getElementById("edit_age").value;
        var city = document.getElementById("edit_city").value;

        if (username === "" || age === "" || city === "") {
            show_message("error", "Please fill all field");
        } else {
            const student = {
                "id": id,
                "username": username,
                "age": age,
                "city": city
            };
            const jsonData = JSON.stringify(student);
            const result = await axios.put("php/update-data.php", jsonData);
            // console.log(result.data);
            if (result.data.update === "success") {
                show_message("success", "Data Update Successfully");
                hide_model();
                document.getElementById("submit_form").reset();
                loadData();
            } else {
                show_message("error", "Data is faild");
            }
        }
    } catch (error) {
        show_message("error", error);
    }



}
update.addEventListener("click", updateData);


const deleteData = async (id) => {
    try {
        const result = await axios.get(`php/delete-data.php?id=${id}`);
        if (result.data.delete === "success") {
            loadData();
            countData();

            show_message("success", "Delete Successfully");
        } else {
            show_message("error", "Delete not successfully");
        }
    } catch (error) {
        show_message("error", error);
    }
}


const searchData = async () => {
    const search = document.getElementById("search").value;
    // console.log(search)
    try {
        const result = await axios.get(`php/search-data.php?search=${search}`);
        var tbody = document.getElementById("tbody");
        var tr = "";
        if (result.data["empty"] == "empty") {
            tr += "<tr ><td colspan='6' align='center'>Data not Found</td></tr>"
        } else {
            for (const i in result.data) {
                tr += `
                <tr>
                <td>${parseInt(i) + 1}</td>
                <td>${result.data[i].username}</td>
                <td>${result.data[i].age}</td>
                <td>${result.data[i].city}</td>
                <td><button class='btn btn-primary' onclick=editData(${result.data[i].id})>Edit</button></td>
                <td><button class='btn btn-danger' onclick=deleteData(${result.data[i].id})>Delete</button></td>
            </tr>
                `;
            }
        }
        tbody.innerHTML = tr;
    } catch (error) {
        show_message("error", error);
    }
}
searchData();

const show_message = (type, text) => {
    if (type == "error") {
        var message_box = document.getElementById("error_message");
    } else {
        var message_box = document.getElementById("success_message");
    }
    message_box.innerHTML = text;
    message_box.style.display = "block";
    setTimeout(() => {
        message_box.style.display = "none";
    }, 2000);
}
window.addEventListener("click", (e) => {
    if (e.target == model) {
        model.style.display = "none";
    }
})