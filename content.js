var isCensored = false;


// Find all elements with class name "discusses"
const discussesElements = document.querySelectorAll('.discusses');

// Loop through each element and set its style to "display: block;"
discussesElements.forEach(element => {
    if (element.style.display === "none") {
        isCensored = true;
        element.style.display = 'block';
    }
});

if (isCensored) {
// Find the element with class "wrapper-title"
    const wrapperTitle = document.querySelectorAll('.wrapper-title')[0];

// Create a new element with the provided HTML code
    const discussForm = document.createElement('div');
    discussForm.innerHTML = `
        <form class="discuss-form" action="/node/` + window.location.pathname.split("/").pop() + `" method="post" id="discuss-form" accept-charset="UTF-8"><div><div class="text-format-wrapper"><div class="form-item form-type-textarea form-item-body-value">
         <div class="form-textarea-wrapper resizable textarea-processed resizable-textarea"><textarea placeholder="دیدگاه خود را بنویسید..." class="ckeditor-mod form-textarea required" id="edit-body-value" name="body[value]" cols="60" rows="3"></textarea><div class="grippie"></div></div>
        </div>
        <fieldset class="filter-wrapper form-wrapper" id="edit-body-format"><div class="fieldset-wrapper"><div class="filter-help form-wrapper" id="edit-body-format-help"><p><a href="/filter/tips" target="_blank">اطلاعات بیشتر در مورد فرمت‌های متنی</a></p></div><div class="form-item form-type-select form-item-body-format">
          <label for="edit-body-format--2">فرمت متنی </label>
         <select class="filter-list form-select ckeditor-processed" id="edit-body-format--2" name="body[format]"><option value="filtered_html">Filtered HTML</option><option value="plain_text" selected="selected">Plain text</option></select>
        </div>
        <div class="filter-guidelines form-wrapper filter-guidelines-processed" id="edit-body-format-guidelines"><div class="filter-guidelines-item filter-guidelines-filtered_html" style="display: none;"><h3 style="display: none;">Filtered HTML</h3><ul class="tips"><li>آدرس صفحات وب و آدرس‌های پست الکترونیکی بصورت خودکار به پیوند تبدیل می‌شوند.</li><li>تگ‌های HTML مجاز: &lt;a&gt; &lt;em&gt; &lt;strong&gt; &lt;cite&gt; &lt;code&gt; &lt;ul&gt; &lt;ol&gt; &lt;li&gt; &lt;dl&gt; &lt;dt&gt; &lt;dd&gt; &lt;p&gt; &lt;img&gt; &lt;table&gt; &lt;thead&gt; &lt;tfoot&gt; &lt;tbody&gt; &lt;tr&gt; &lt;th&gt; &lt;td&gt;</li><li>خطوط و پاراگراف‌ها بطور خودکار اعمال می‌شوند.</li></ul></div><div class="filter-guidelines-item filter-guidelines-plain_text" style="display: block;"><h3 style="display: none;">Plain text</h3><ul class="tips"><li>هیچ تگ HTML ی مجاز نیست.</li><li>آدرس صفحات وب و آدرس‌های پست الکترونیکی بصورت خودکار به پیوند تبدیل می‌شوند.</li><li>خطوط و پاراگراف‌ها بطور خودکار اعمال می‌شوند.</li></ul></div></div></div></fieldset>
        </div>
        <div class="gif-preview">
          <i>برداشتن</i>
          <div class="gif-preview-image"></div>
        </div>
        <div class="form-actions form-wrapper" id="edit-actions"><span class="gif-toggle">گیف</span><input onclick="this_btn=this;setTimeout('this_btn.disabled=true',0)" type="submit" id="edit-submit" name="op" value="ارسال دیدگاه" class="form-submit"></div><input type="hidden" name="attachment_entity_type" value="">
        <input type="hidden" name="attachment_entity_id" value="">
        <input type="hidden" name="attachment_caption" value="">
        <input type="hidden" name="form_build_id" value="form-FCT14pmpW2f4BKVSipU80ThB9Qn2SsUOnYGIw3OoSdw">
        <input type="hidden" name="form_token" value="BkY3cFFeruYy1D9tmMryQgagyl_7_rVdlC7IEEXXBMY">
        <input type="hidden" name="form_id" value="discuss_form">
        <div class="gif-search">
          <input type="text" placeholder="جستجو..." data-offset="0">
          <div class="gif-list"></div>
        </div>
        </div></form>
`;

// Insert the new element after the element with class "wrapper-title"
    wrapperTitle.insertAdjacentElement('afterend', discussForm);

}