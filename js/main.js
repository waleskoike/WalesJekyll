'use strict';

const show = document.getElementById('show');
const hide = document.getElementById('hide');
const cover = document.getElementById('cover');
const link_about = document.getElementById('link_about');
const link_desc = document.getElementById('link_desc');
const link_docs = document.getElementById('link_docs');
const link_contact = document.getElementById('link_contact');
const more_btn = document.getElementById('more_btn');
const more_paragraph = document.getElementById('more');

show.addEventListener('click', () => {
  document.body.className = 'menu-open';
});

hide.addEventListener('click', () => {
  document.body.className = '';
});

cover.addEventListener('click', () => {
  document.body.className = '';
});

link_about.addEventListener('click', () => {
  document.body.className = '';
});

link_desc.addEventListener('click', () => {
  document.body.className = '';
});

link_docs.addEventListener('click', () => {
  document.body.className = '';
});

link_contact.addEventListener('click', () => {
  document.body.className = '';
});

more_btn.addEventListener('click', () => {
  more_paragraph.classList.add('open');
  more_btn.classList.add('close');
});

// Initialize and add the map
function initMap() {
  // The location of wales
  const wales = {lat: 52.1306607, lng: -3.783711700000026};
  // The map, centered at Wales
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 6,
      center: wales
    }
  );
  // The marker, positioned at Wales
  const marker = new google.maps.Marker(
    {
      position: wales,
      map: map
    }
  );
}