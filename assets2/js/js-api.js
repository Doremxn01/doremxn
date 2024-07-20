fetch('https://raw.githubusercontent.com/DarrenOfficial/lavalink-list/master/docs/SSL/lavalink-with-ssl.md')
    .then(response => response.text())
    .then(markdown => {
        const modifiedMarkdown = markdown.replace(/```/g, '```language-text');
        const converter = new showdown.Converter();
        const html = converter.makeHtml(modifiedMarkdown);
        document.querySelector('.markdown-content').innerHTML = html;
    })
    .catch(error => {
        console.error('An error occurred while fetching or rendering the content:', error);
        document.querySelector('.markdown-content').innerHTML = 'Unable to load content.';
    });