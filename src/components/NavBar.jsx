import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css'; // Import the CSS file
import logo from '../assets/android-chrome-512x512.png';
export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <Link to={item.to} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="navbar__badge ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            to: '/'  // Add to property
        },
        {
            label: 'About',
            icon: 'pi pi-star',
            to: '/about'  // Add to property
        },
        {
            label: 'Features',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Video Deepfake',
                    icon: 'pi pi-bolt',
                    to: '/features/video-deepfake',  // Add to property
                    template: itemRenderer
                },
                {
                    label: 'Image Deepfake',
                    icon: 'pi pi-server',
                    to: '/image-deepfake',  // Add to property
                    template: itemRenderer
                },
                {
                    label: 'Audio Deepfake',
                    icon: 'pi pi-pencil',
                    to: '/features/audio-deepfake',  // Add to property
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            to: '/contact',  // Add to property
            template: itemRenderer
        }
    ];
    const start = (
        <Link to="/">
            <img alt="logo" src={logo} height="40" className="mr-2"></img>
        </Link>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="navbar__input" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" className="navbar__avatar" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} className="navbar" />
            
        </div>
    )
}
