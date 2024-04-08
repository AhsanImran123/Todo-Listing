import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    let option = await inquirer.prompt([{
            type: 'list',
            name: "user_option",
            message: 'select an options',
            choices: ["Add", "remove"]
        }]);
    if (option.user_option === "Add") {
        let ans = await inquirer.prompt([{
                type: 'input',
                name: 'usr_ans',
                message: 'Write something to add in the Tsak List.'
            }]);
        if (ans.usr_ans !== '') {
            todo_list.push(ans.usr_ans);
            console.log(todo_list);
        }
        else {
            console.log('please add something to add in the todo list');
        }
    }
    else if (option.user_option === "remove") {
        let removechoice = await inquirer.prompt([{
                type: 'list',
                name: 'remove_item',
                message: 'select item to remove',
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removechoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('you removed : ', removechoice.remove_item);
            console.log(todo_list);
        }
    }
    let usr_ans = await inquirer.prompt([{
            type: 'confirm',
            name: 'selection',
            message: 'do you want to continue',
            default: true
        }]);
    if (usr_ans.selection === false) {
        while_condition = false;
    }
}
console.log('Thank you for using to do list');
