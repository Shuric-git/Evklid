document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

            tabsBtn.classList.remove('tabs__btn-active')

            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__btn-active')
        })
   })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#burger__menu').classList.toggle('is-active')

    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#burger').classList.toggle('burger-close')

    })
})