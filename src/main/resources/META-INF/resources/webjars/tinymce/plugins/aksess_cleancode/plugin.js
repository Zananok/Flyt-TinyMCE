/*
 * Copyright 2009 Kantega AS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

tinymce.PluginManager.add('aksess_cleancode', function(editor, url){

    function cleanupCode() {
        tinymce.execommand('mceCleanup');
    }

    function makeUploadPopupWindow() {
        // Open window
        editor.windowManager.open({
            title: 'Last opp bilde',
            url: properties.contextPath + "/admin/multimedia/ViewUploadMultimediaForm.action?fileUploadedFromEditor=true",
            iframe: false,
            width: 450,
            height: 450
        });
    }

    // Add a button that opens a window
    editor.addButton('aksess_cleancode', {
        tooltip: 'Clean-up code',
        //image: url + '/img/uploadimage.png',
        icon: 'brush',
        onclick: cleanupCode
    });

    // Adds a new item to the insert menu
    editor.addMenuItem('aksess_cleancode', {
        text: 'Clean-up code',
        //image: url + '/img/uploadimage.png',
        icon: 'brush',
        context: 'tools',
        onclick: cleanupCode
    });
});