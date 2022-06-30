| Tính năng | Javascript thuần | jQuery |
| --- | --- | --- |
| Truy cập | document.getElementById, document.getElementsByTagName, document.getElementsByClassName, document.querySelector, document.querySelectorAll | $(selector) |
| Get set content| innerHTML, innerText, textContent, value| html(), text(), val()|
| CSS | element.style.property | \$(selector).css(property, value), \$(selector).css({ property1 : value1, property2 : value2})|
| Thêm phần tử | appendChild, prepend, insertBefore, insertAdjacent| append, prepend, after, before|
| Xóa | removeChild() | remove(), empty() |
| Thay thế | replaceChild() | replaceWith() |
| Copy | cloneNode() | clone() |
| class| add, remove, contains, toggle| addClass, removeClass, hasClass, toggleClass |
| Vòng lặp | for, forEach, ...| $(selector).each(index, element) |
| Lấy theo chỉ số | node[0]| \$(selector)[1], \$(selector).eq(1) |