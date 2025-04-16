import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Language Toggle (Placeholder)
function toggleLanguage() {
    alert('Language toggle functionality will be implemented here');
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const loader = document.getElementById('loader');
    loader.classList.add('active');

    try {
        const formData = new FormData(e.target);
        const data = {
            userId: localStorage.getItem('userId') || 'user_' + Date.now(),
            appSlug: 'techvision-website',
            action: 'create',
            table: 'contacts',
            data: {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            }
        };

        const response = await fetch('https://r0c8kgwocscg8gsokogwwsw4.zetaverse.one/db', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer wDSwxwAAKeTUswqV9QgLFjONQ6f1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Thank you for your message. We will get back to you soon!');
            e.target.reset();
        } else {
            throw new Error('Failed to submit form');
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    } finally {
        loader.classList.remove('active');
    }
});

// Job Openings Modal
function showJobOpenings() {
    alert('Current job openings will be displayed here');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


