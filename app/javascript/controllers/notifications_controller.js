import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    (document.querySelectorAll(".notification .delete") || []).forEach(
      ($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener("click", () => {
          $notification.parentNode.removeChild($notification);
        });
      }
    );
  }
}
