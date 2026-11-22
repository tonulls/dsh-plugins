# Yoruba Localization Testing

Use a reviewed Yoruba fixture and check that round trips through storage, search and display preserve characters and tone marks. Test NFC and decomposed input deliberately, keep normalization consistent and verify font rendering and line breaks in context. Ask a qualified speaker to review wording whose meaning is uncertain.

Test both equivalence and distinction. NFC and NFD forms of the same text should compare equal
where canonical matching is intended. Underdotted letters and different tones should remain
distinct in stored text and exact comparisons. Round-trip the message fixture through the
project's serialization format. For an untranslated key, verify the configured fallback language
and confirm that translations present in the target locale still take precedence.
