import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");
    const [html, setHtml] = useState("");

    // Update HTML whenever markdown changes
    React.useEffect(() => {
        // ReactMarkdown renders markdown, but to get HTML string, we can use a temporary element
        // For live preview, we just use ReactMarkdown directly
        // For HTML string, we can use a library like 'marked', but here we'll use a workaround
        // For simplicity, we'll skip HTML string or use markdown as HTML for now
        setHtml(markdown);
    }, [markdown]);

    return (
        <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
            <div style={{ flex: 1 }}>
                <h2>Markdown Input</h2>
                <textarea
                    style={{ width: "100%", height: "300px", fontSize: "1rem" }}
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                />
            </div>
            <div style={{ flex: 1 }}>
                <h2>Live Preview</h2>
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "1rem",
                        minHeight: "300px",
                        background: "#fafafa",
                    }}
                >
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div> 
            </div>
        </div>
    );
}