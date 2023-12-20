/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });

  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });

    expect(all.length).toBe(todoItemCount + 1);
    add({
      title: "Test2 todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });

    expect(all.length).toBe(todoItemCount + 2);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);

  });

  test("checks retrieval of overdue items", () => {
    const ydate = new Date();
    ydate.setDate(ydate.getDate() - 1);

    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: ydate.toISOString().slice(0, 10),
    });
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].dueDate).toBe(ydate.toISOString().slice(0, 10));
  });

  test("checks retrieval of due today items", () => {
    const today = new Date().toISOString().slice(0, 10);
    add({
      title: "Due Today Todo",
      completed: false,
      dueDate: today,
    });

    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(4);
    expect(dueTodayItems[0].dueDate).toBe(today);
  });

  test("checks retrieval of due later items", () => {
    const tdate = new Date();
    tdate.setDate(tdate.getDate() + 1);
    add({
      title: "Due Later Todo",
      completed: false,
      dueDate: tdate.toISOString().slice(0, 10),
    });
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].dueDate).toBe(tdate.toISOString().slice(0, 10));
  });

});
