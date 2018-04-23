/*module.exports = (dato, root, i18n) => {

    // inside a "src/articles" directory...
    root.directory("source/_posts", (articlesDir) => {

        // ...iterate over the "Blog post" records...
        dato.articles.forEach((article) => {

            // ...and create a markdown file for each article!
            articlesDir.createPost(
                `${article.title}.md`, "yaml", {
                    frontmatter: { 
                        title: article.title, 
                    },
                    content: article.content
                }
            );
        });
    });
};*/   


module.exports = (dato, root, i18n) => {
    root.createPost(
        "source/page/page.md", "yaml", {
            frontmatter: { 
                title: dato.page.zagolovok,
                date: dato.page.data
            },
            content: dato.page.soderjimoe
        }
    );
};


/*  // работает
module.exports = (dato, root, i18n) => {
    root.createDataFile("source/page/page.md", "yaml", dato.page.zagolovok + dato.page.soderjimoe)
};
*/
/*  // работает
module.exports = (dato, root, i18n) => {
    root.createDataFile("source/page/page.md", "yaml", dato.pages[0].zagolovok)
};
*/









/*module.exports = (dato, root, i18n) => {
    root.createPost(
        "source/page/page.md", "yaml", {
            frontmatter: { 
                title: dato.pages[0].title 
            },
            content: "Lorem **ipsum dolor sit amet**"
        }
    );
};*/


/*module.exports = (dato, root, i18n) => {
    root.createPost(
        "source/page/page.md", "yaml", {
            frontmatter: { 
                title: dato.pages[0].title 
            },
            content: "Lorem **ipsum dolor sit amet**"
        }
    );
};*/
    
    
    /*
    root.directory("source/page", (pagesDir) => {
        pagesDir.createPost(
               `${page1.title}.md`, "yaml", {
                    frontmatter: { 
                        title: page1.title, 
                    },
                content: page1.content
                }
            );
    });    
    */
    
    
    //root.directory("source/page", (pagesDir) => {

        /*dato.page1(page) => {
            
            pagesDir.createPost(
                `${page1.title}.md`, "yaml", {
                    frontmatter: { 
                        title: page1.title, 
                    },
                    content: page1.content
                }
            );
        
        
        }*/
        
        /*dato.page1((page1) => {
            pagesDir.createPost(
                {page1.title}.md`, "yaml", {
                    frontmatter: { 
                        title: page1.title, 
                    },
                    content: .content
            );    
        )};
    });*/
    //});
