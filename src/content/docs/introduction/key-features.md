---
title: "Key features"
description: "An overview of Kotahi's capabilities across submission, review, production and publishing."
sidebar:
  order: 2
reviewStatus: converted-unverified
sourceNote: "Converted from docs.kotahi.community/getting-started/features.html."
---
:::note[Feature list needs re-checking]
This page was written before eLife Pathways took over stewardship and describes some features — including AI-assisted ones — that have not been re-confirmed against a current release. Treat the list as indicative until it is verified.
:::

## Key Features of Kotahi

Kotahi is more than just a journal platform—it's a comprehensive scholarly publishing platform designed to support diverse workflows. Kotahi offers customizable workflows that extend beyond traditional journals, enabling teams to collaborate and process research objects according to their specific requirements.

**Kotahi advances publishing in three key ways:**

1. **Supporting Legacy Workflows:** Kotahi can operate traditional journals while offering extensive configuration options to optimize workflows over time.
2. **Enabling New Workflows:** Built for emerging models such as publish-review-curate (PRC) and more, Kotahi supports micropublications, curated knowledge compendiums, and other innovations.
3. **Allowing Experimentation:** With multi-tenancy support, Kotahi enables setting up multiple teams or journals to test new workflows at no added cost. Teams can run legacy systems while experimenting with new models.

Overall, Kotahi provides adaptable infrastructure to encapsulate diverse publishing models and ways of working, both current and emerging. Its configurability aims to move scholarly publishing forward.

Multitenancy Supporting Diverse Use Cases

Managing multiple scholarly publishing groups like journals, preprint servers, or preprint review communities traditionally required running separate software for each. This quickly becomes cumbersome and difficult to scale.

Kotahi resolves this issue by providing native multitenancy support for various use cases within a single integrated system. A single Kotahi installation can host any number of journals, preprint servers, or preprint review communities.

Each group functions independently with its own:

- Isolated data and privacy
- Customizable submission workflows
- Unique look and feel
- Publish endpoint

**Key benefits of Kotahi’s multitenant approach include:**

- Reduced software overhead, as only a single instance needs to be maintained
- Tailored workflows for each group without conflicts
- Easy scalability when adding new groups
- Streamlined cross-group analytics and reporting
- The ability to experiment with new publishing processes within one system

This architecture reduces the complexity and costs of operating diverse portfolios of journals, preprint servers, and review communities. As publishers scale up their groups, new ones can be easily onboarded while retaining custom workflows.

**A Modern, Powerful CMS**

Kotahi incorporates a modern content management system (CMS) based on static site generation rather than a traditional database-request-driven CMS. This approach provides significant advantages in speed, security, and scalability.

Compared to a traditional CMS, which can become sluggish and vulnerable at scale, Kotahi’s CMS remains lightning-fast and rock-solid regardless of traffic or content volume. This innovative architecture ensures publishers can manage content efficiently while providing users with a reliably fast experience. Full-text articles are published at the push of a button. The CMS can handle the demands of complex scholarly publishing requirements both now and in the future.

**Automated JATS Production**

The Journal Article Tag Suite (JATS) XML standard allows content to be structured, exchanged, and preserved in a consistent machine-readable format. However, many publishers find JATS complex, costly, and cumbersome to implement. Kotahi aims to change this by integrating JATS production seamlessly into the publishing workflow.

Kotahi sees a document as a constellation of content, primarily in the form of the manuscript text and associated metadata. Customizable submission forms in Kotahi gather comprehensive metadata upfront. The internal production editor then provides an intuitive way to prepare content for JATS export without needing direct XML skills. Users visually highlight and tag content sections, and these selections are automatically mapped to the appropriate JATS document elements. Kotahi converts the prepared manuscript and metadata into validation-checked JATS XML that complies with all specifications.

By integrating JATS production into the publishing pipeline, Kotahi makes adopting JATS accessible to mainstream publishers, lowering the barrier to entry while facilitating standards compliance at scale.

**Automated Production of PDF**

One of Kotahi’s standout features is the ability to automatically typeset and generate print-ready PDFs with just a click. This is powered by the integration of Paged.js, an open-source library for paginating HTML content into high-quality PDF documents.

As manuscripts in Kotahi are edited and stored as HTML, Paged.js can fragment the content into pages, inject sophisticated print styling, and paginate a preview within the browser. When ready, the print-perfect PDF can be saved out (or batch processed) with no manual typesetting required.

This browser-based PDF generation approach enables automated workflows, allowing Kotahi to produce press-ready PDFs at scale in a fraction of the time and at little or no cost.

**Drag-and-Drop Submission Form Creation**

Kotahi features an intuitive drag-and-drop interface for creating submission forms, removing the need for coding knowledge or technical expertise. Users can easily add, remove, or rearrange form fields as needed. Whether working from pre-made templates or designing fully customized forms, the process is quick and user-friendly, resulting in more complete information being captured upfront, benefiting downstream teams.

**Support for Any Metadata Schema**

Kotahi supports submission and publication using any metadata schema, including custom schemas or niche standards. This adaptability lets publishers capture optimal metadata for their domain and needs. The drag-and-drop form builder allows any metadata tags to be attached to submission fields, enabling the capture of detailed author information and other complex data.

**Tailored Peer Review Process**

Kotahi provides flexibility to tailor the review process to each journal or review community’s specific needs. Different models, including open, blind, or double-blind reviews, can be configured. Reviewers can collaborate on shared reviews while also providing individual feedback if desired. Customizing the level of author participation is also supported, facilitating constructive conversations between authors and reviewers to improve manuscripts.

**Real-Time Communication Tools**

Kotahi incorporates real-time communication features, including live chat and video chat, to facilitate conversations as needed. All communications become visible within the platform, eliminating email clutter and streamlining collaboration.

**Customizable Task Management**

Kotahi incorporates advanced but customizable task management capabilities, providing an overview of tasks and workflows across the publishing lifecycle. Granular controls allow configuring task management at a per-journal or even per-manuscript level, resulting in tailored workflows for each manuscript’s unique needs.

**Versioning**

Kotahi supports versioning of submissions to track revision history across review and editing cycles. Each new submission round creates a new version of both the manuscript content and submission metadata, allowing tracking from initial draft to final published form.

**AI-Powered Preprint Recommendations**

Kotahi enables AI-powered preprint recommendations that assist curators in identifying relevant manuscripts for review. This tailored AI-matching allows curators to rapidly pinpoint the most pertinent preprints to evaluate and disseminate within their field or community.

**Configurable, Customizable, and Extensible**

Kotahi is highly configurable, customizable, and extensible to meet diverse publishing needs. The system allows individual configuration of workflows, review models, metadata schemas, CMS and publish endpoints, task management, and more per group. Further customization can be achieved through integrations, plugins, and the addition of new microservices or functionality.

**Microservice Architecture**

Kotahi is built using a modular microservice architecture, providing benefits such as scalability, flexibility, and resiliency. As publishing needs grow and evolve, Kotahi’s microservices make scaling, upgrading, and maintenance simpler and more cost-effective.

**Smooth Installation and Deployment**

Kotahi offers straightforward installation and deployment using a Docker-based architecture with modular microservices that reduce complexity. The system can scale groups and content without requiring deep technical knowledge.

**100% Open Source**

Kotahi is published under open-source licenses, with all source code freely available. This open development model helps drive rapid innovation and collaboration, enabling publishers to fully utilize Kotahi as a strategic asset customized for their requirements.
