let users = [];
let currentID = 1;


module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        user.id = currentID++;
        users.push(user);
    },
    updateUser: (id, updatedData) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedData };
            return users[userIndex];
        }
        return null;
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1) /* splice - позволяет изменить содержимое массива за счёт удаления существующих элементов, и/или добавления новых элементов в массив */
            return true;
        }
        return false;
    },
    getUserByID: (id) => users.find(u => u.id === id)
};