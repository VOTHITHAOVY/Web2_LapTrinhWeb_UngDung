// ====== DOM LOADED ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('BaloOutlet website loaded successfully!');
    
    // Initialize all functionality
    initTabs();
    initCart();
    initWishlist();
    initSearch();
    initMobileMenu();
    initProductHover();
});

// ====== TAB SWITCHING ======
function initTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabLinks.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get tab name
            const tabName = this.textContent.trim();
            console.log(`Switched to tab: ${tabName}`);
            
            // In a real application, you would load different products here
            // Example: loadProducts(tabName);
        });
    });
}

// ====== ADD TO CART FUNCTIONALITY ======
function initCart() {
    const cartButtons = document.querySelectorAll('.btn-cart');
    const cartCountElement = document.querySelector('.cart-count');
    const floatingCartBtn = document.querySelector('.floating-btn.cart');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product info
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            // Update cart count
            let currentCount = parseInt(cartCountElement.textContent);
            cartCountElement.textContent = currentCount + 1;
            
            // Button animation
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> ĐÃ THÊM';
            this.style.backgroundColor = '#27ae60';
            this.disabled = true;
            
            // Floating cart animation
            if (floatingCartBtn) {
                floatingCartBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    floatingCartBtn.style.transform = 'scale(1)';
                }, 300);
            }
            
            // Show notification
            showNotification(`Đã thêm "${productName}" vào giỏ hàng!`);
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
                this.disabled = false;
            }, 2000);
            
            // In a real app, you would send this to your backend
            // addToCartAPI(productId, quantity);
        });
    });
}

// ====== WISHLIST TOGGLE ======
function initWishlist() {
    const wishlistButtons = document.querySelectorAll('.btn-wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const icon = this.querySelector('i');
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            
            if (icon.classList.contains('far')) {
                // Add to wishlist
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.backgroundColor = '#333333';
                this.style.color = 'white';
                
                showNotification(`Đã thêm "${productName}" vào yêu thích!`);
                console.log(`Added to wishlist: ${productName}`);
            } else {
                // Remove from wishlist
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.backgroundColor = '';
                this.style.color = '';
                
                showNotification(`Đã xóa "${productName}" khỏi yêu thích!`);
                console.log(`Removed from wishlist: ${productName}`);
            }
        });
    });
}

// ====== SEARCH FUNCTIONALITY ======
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    // Search on button click
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    function performSearch(query) {
        const trimmedQuery = query.trim();
        
        if (trimmedQuery === '') {
            showNotification('Vui lòng nhập từ khóa tìm kiếm!', 'warning');
            return;
        }
        
        console.log(`Searching for: ${trimmedQuery}`);
        showNotification(`Đang tìm kiếm: "${trimmedQuery}"...`);
        
        // In a real app, you would redirect to search results page
        // window.location.href = `/search?q=${encodeURIComponent(trimmedQuery)}`;
    }
}

// ====== MOBILE MENU ======
function initMobileMenu() {
    const logo = document.querySelector('.logo');
    const navList = document.querySelector('.nav-list');
    
    // Only add mobile menu toggle on small screens
    if (window.innerWidth <= 992) {
        logo.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                navList.classList.toggle('show');
                
                // Add some basic styles for mobile menu
                if (navList.classList.contains('show')) {
                    navList.style.display = 'block';
                    navList.style.position = 'absolute';
                    navList.style.top = '100%';
                    navList.style.left = '0';
                    navList.style.width = '100%';
                    navList.style.backgroundColor = 'white';
                    navList.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                } else {
                    navList.style.display = '';
                }
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992 && 
            !logo.contains(e.target) && 
            !navList.contains(e.target) && 
            navList.classList.contains('show')) {
            navList.classList.remove('show');
            navList.style.display = '';
        }
    });
}

// ====== PRODUCT HOVER EFFECTS ======
function initProductHover() {
    const productCards = document.querySelectorAll('.product-card');
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Add hover delay for smoother animations
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// ====== NOTIFICATION SYSTEM ======
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ====== WINDOW RESIZE HANDLER ======
window.addEventListener('resize', function() {
    // Reinitialize mobile menu on resize
    initMobileMenu();
});

// ====== FLOATING BUTTONS CLICK ======
document.querySelectorAll('.floating-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const btnType = Array.from(this.classList).find(cls => 
            cls !== 'floating-btn'
        );
        
        switch(btnType) {
            case 'zalo':
                showNotification('Mở Zalo chat...');
                // window.open('https://zalo.me/your-number', '_blank');
                break;
            case 'messenger':
                showNotification('Mở Messenger...');
                // window.open('https://m.me/your-page', '_blank');
                break;
            case 'cart':
                showNotification('Mở giỏ hàng...');
                // window.location.href = '/cart';
                break;
        }
    });
});