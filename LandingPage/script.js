   document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.nav-tab');
            const sections = document.querySelectorAll('#contenido-principal .content-section');
            
            document.getElementById('hobbies').classList.add('active');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    this.classList.add('active');
                    
                    sections.forEach(s => s.classList.remove('active'));
                    
                    const target = this.getAttribute('data-target');
                    document.getElementById(target).classList.add('active');
                });
            });
        });