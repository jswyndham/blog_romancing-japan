export const deskStructure = (S: any) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Config")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document().schemaType("settings").documentId("siteSettings")
                ),
              S.listItem()
                .title("Site Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Filtered Posts")
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .title("Posts By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Posts by Category")
                    .child((categoryId: string) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type == "post" && $categoryId in category[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Posts By Tag")
                .child(
                  S.documentTypeList("tag")
                    .title("Posts by Tag")
                    .child((tagId: string) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "post" && $tagId in tag[]._ref')
                        .params({ tagId })
                    )
                ),
              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by Author")
                    .child((authorId: string) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "post" && $authorId in author[]._ref')
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.listItem().title("All Posts").child(
        /* Create a list of all posts */
        S.documentList().title("All Posts").filter('_type == "post"')
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: { getId: () => string }) =>
          !["settings", "post", "colors", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
