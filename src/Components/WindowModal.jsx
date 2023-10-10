import React, { useState } from 'react';
import './WindowModal.css';

const WindowModal = ({ isOpen, onClose, children }) => {
    return (
        isOpen && (
            <div className="window-modal">
                <div className="window-header">
                    <div className="window-title">My Window</div>
                    <div className="window-actions">
                        <button className="window-close" onClick={onClose}>X</button>
                    </div>
                </div>
                <div className="window-content">
                    {children}
                </div>
            </div>
        )
    );
}

export default WindowModal;
