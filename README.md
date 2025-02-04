# YoumiLab Website

This repository contains the source code for the YoumiLab website. The website is built using the Hugo PaperMod template with custom modifications.

## Instruction for Content Modifications

- **Homepage:** Title and overall descriptions should be modified at the end of `hugo.yaml` under `homeInfoParams`.
- **News:** News can be added in `data/news.yaml` following the previous format. `newsUrl` is optional.
- **People:** People's information can be added in `data/people.yaml`. `webpage` and `cv` are optional. The photos and cvs are placed under folder `static/people/`.
- **Research:**
    - To include a **detailed description** for a research project, please add a markdown file `[project_name].md` under `content/research/` with properly defined front matter following the previous style. 
    - The **brief introduction** of each research project should be modifed in `data/research.yaml`. The cover images of research projects are placed under `static/research/` folder. Note that the `projectUrl` should be the `[project_name]/` used for the markdown file with all **lowercase letters**.
- **Posts:** To add a new post, please directly add a markdown file under `content/post/` folder. Please make sure to include `postSearch: true` to include this post in the search function for Posts page.
- **Publications:** New publications can be added in `data/publication.yaml` under their corresponding sections: `workingPapers, methods or applications`. Note that `paperUrl, PDFUrl, codeUrl, packageUrl` are optional.
- **Teaching** Content on this page can be directly modified in `content/teaching.md`.
- **Join us** Content on this page can be directly modified in `content/joinus.md`.




