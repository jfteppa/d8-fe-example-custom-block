(function ($) {
  "use strict";
  Drupal.behaviors.feExample = {
    attach: function (context, drupalSettings) {
      $("#add_task", context)
        .once("addExampleTask")
        .on("click", function () {
          const tasksList = $("#tasks_list", context);
          const newTaskInput = $("#new_task", context);
          addTask({ title: newTaskInput.val() }, tasksList);
          newTaskInput.val("");
        });

      $(document)
        .once("updateExampleTask")
        .on("click", "#tasks_list .task_status", function () {
          const taskItem = $(this).parent("li.task_item", context);
          if (this.checked) {
            taskItem.addClass("done");
          } else {
            taskItem.removeClass("done");
          }
        });

      $("#reset_tasks", context)
        .once("resetExampleTasks")
        .on("click", function () {
          if (confirm(Drupal.t("Are you sure you want to reset the tasks?"))) {
            const tasksList = $("#tasks_list", context);
            tasksList.html("");
            const fe_example = drupalSettings.fe_example;
            fe_example?.default_tasks?.map((task) => addTask(task, tasksList));
            fe_example?.alter_tasks?.map((task) => addTask(task, tasksList));
          }
        });

      $("#toggle_completed", context)
        .once("toggleExampleTasks")
        .on("click", function () {
          $(".task_item.done", context).stop(true, true).fadeToggle();
        });

      $(document)
        .once("deleteExampleTask")
        .on("click", "#delete_task", function () {
          if (confirm(Drupal.t("Are you sure you want to delete this task?"))) {
            $(this).parent("li", context).remove();
          }
        });
    },
  };

  const addTask = (task, tasksListWrapper) => {
    tasksListWrapper.append(`<li class="task_item ${task.status ?? "to-do"}">
      <input class="task_status" type="checkbox" ${
        task?.status === "done" ? "checked" : ""
      }>
      <span class="task_title">${task.title}</span>
      <button class="btn btn-delete" id="delete_task">
        ${Drupal.t("delete")}
      </button>
    </li>`);
  };
})(jQuery);
