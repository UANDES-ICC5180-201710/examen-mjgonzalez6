+function toggleInterest(clicked_course_id) {
+    $button = $('#'+clicked_course_id);
+    $interestedUser = $('#purchase-users-'+clicked_game_id);
+    if($button.hasClass('isActive')){
+
+        $button.addClass('notActive');
+        $button.removeClass('isActive');
+        $url = 'remove_purchase';
+    } else {
+
+        $button.addClass('isActive');
+        $button.removeClass('notActive');
+        $url = 'add_purchase';
+    }
+    $button.blur();
+
+    $.ajax({
+      type: "GET",
+      dataType: "json",
+      url: $url,
+      data: {
+          game_id: clicked_game_id// < note use of 'this' here
+      },
+      success: function(json) {
+          $purchaseUsers.html("Interesados: " + json.purchaseUsers);
+
+      },
+      error: function(json) {
+          $purchaseUsers.html("Interesados: " + json.purchaseUsers);
+      }
+  });
+}
 $(document).ready(function() {
   var $addUserForm = $('#addUserPurchase form');
+  var $url = 'add_purchase';

   $addPersonForm.on('ajax:success', function(e, data, status, xhr)  {
     var $newHtml = $(data);
     $addPersonForm.html($newHtml.find('form#new_user').html());
   }).on('ajax:error', function(e, xhr, status, error) {
     alert(error);
   });
+
 });
